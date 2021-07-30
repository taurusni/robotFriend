import React, {Component} from "react";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import SearchBox from "../components/SearchBox"; // it is not default, so have to use the deconstructing to pick the dedicated one up
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // Fake the API
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({ robots: users})});
    }

    // Use the follow arrow function for all own defined one to avoid the misuse of this keyword
    onSearchChange = (event) => {
        // React way to change the value of state
        this.setState({searchField:event.target.value})
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;
