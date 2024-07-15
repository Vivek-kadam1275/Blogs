import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
const Blogs = (props) => {

  const { posts, fetchData, loading } = useContext(AppContext);
  useEffect(() => {
    fetchData(1);
  }, [])

  return (
    <div className="w-6/12 max-w-[1250px] flex flex-col gap-10  pt-20 pb-20    h-full">

      {loading ? (<div className="flex justify-center mt-52"><Spinner/></div>) :

        (posts.map((post) => {
          return (<div key={post.id} className="flex flex-col gap-1 ">
            <p className="text-black font-bold text-md">{post.title}</p>
            <div>
              <p className="italic flex gap-1 " ><span >By</span>{post.author}<span>on</span><span
                className=" not-italic underline">{post.category}</span></p>

              <p><span className="pr-1">Posted on</span>{post.date}</p>
            </div>
            <p className="mt-1">{post.content}</p>

            <p className="flex gap-1 flex-wrap ">
              {post.tags.map((tag, index) => {
                return <p key={index} className="text-blue-700 underline font-bold text-xs">#{tag}</p>
              })}
            </p>

          </div>)
        }))}

    </div>
  )
};

export default Blogs;
