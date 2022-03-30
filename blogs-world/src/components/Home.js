
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
          {error && <p>{error}</p>}
          {isPending && <div>Loading...</div>}
        {blogs && <Bloglist blogs={blogs}></Bloglist> }
        </div> 
     );
}
 
export default Home;
