import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default (
    <Router>
        <div>
            <ul className="nav">
                <li><Link to="/">App</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/User">User</Link></li>
                <li><Link to="/Detail">Detail</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/User" component={User} />
            <Route path="/Detail" component={DeatilComponent} />
        </div>
    </Router>
)