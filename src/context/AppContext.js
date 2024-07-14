import axios from "axios";
import {  createContext, useState } from "react";


// Context creation
export const AppContext = createContext();


export default function AppContextProvider(props) {
    const [loading,setLoading]=useState(false);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(null);
    const [posts, setPosts] = useState([]);

    const url = 'https://codehelp-apis.vercel.app/api/get-blogs';
    async function fetchData(page) {
        try {
            setLoading(true);

            const data = await axios.get(`${url}?page=${page}`);
            setPage(data.data.page);
            setPages(data.data.totalPages);
            setPosts(data.data.posts);

            setLoading(false)
        }
        catch (error) {
                console.log(error);
        }

    }

    function changeHandler(page){
        setPage(page);
        fetchData(page);


    }
    const value = {
       loading,setLoading, page, setPage, pages, setPages, posts, setPosts,fetchData,changeHandler
    }
    // Context provider.
    return (<AppContext.Provider value={value}>{props.children}</AppContext.Provider>)
}
