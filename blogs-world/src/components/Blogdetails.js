import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
    const { id }=useParams();
    const {data,isPending,error}=useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();
    const handleDelete=()=> {
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE',
        }).then(()=> {history.push('/')})
    };
    return ( 
        <div className="blog-details">
            
            {isPending && <div>...Loading</div>}
            {error && <div>Error!!!!</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <div>Written by {data.author}</div>
                    <div>{data.body}</div>
                    <div><button onClick={handleDelete}>Delete</button></div>
                </article>
            )}
        </div>
     );
}
 
export default Blogdetails;
