import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Wrong url entered</h2>
            <p>The url you entered is not valid or taken down. Click the below link to return to Home</p>
            <Link to='/'>Home...</Link>
        </div>
     );
}
 
export default NotFound;