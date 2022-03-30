import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {
const [Title ,setTitle] =useState('');
const [Body ,setBody] =useState('');
const [Author ,setAuthor] =useState('Sampath');
const [isPending,setIsPending]=useState(false);
const history=useHistory();

const handleSubmit=(e)=> {
    e.preventDefault();
    const blog={title: Title,body: Body, author: Author};
    setIsPending(true);
    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog)
    }).then(() => {setIsPending(false);
        history.push('/');
}
    );
    
};

    return ( 
        <div className="create">
            <h2>Create your new blog here</h2>
            <form onSubmit={handleSubmit}>
            <label>Blog Title: </label>
            <input type='text'
            required 
            value={Title}
            onChange={(e)=> setTitle(e.target.value)}></input>
            <label>Blog Content: </label>
            <textarea
            required 
            value={Body}
            onChange={(e)=> setBody(e.target.value)}></textarea>
            <label>Blog author: </label>
            <select 
            value={Author}
            onChange={(e)=> setAuthor(e.target.value)}>
                <option value="Sampath">
                    Sampath
                </option>
                <option value="Ramya">
                    Ramya
                </option>
                <option value="Others">
                    Others
                </option>
            </select>
           
            {!isPending && <button>Add Blog</button>}
            {isPending && <div>Adding new Blog....</div>}
            </form>
        </div>
     );
}
 
export default Create;