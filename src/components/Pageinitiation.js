import React, { useContext } from "react"
import { AppContext } from "../context/AppContext";

const Pageinitiaton = (props) => {
  const { changeHandler, page, pages } = useContext(AppContext);

  return (
    <div className=" w-full  py-3 flex justify-center border-2 shadow-md  fixed bottom-0 bg-white">
      <div className="flex w-1/2 justify-between ">
        <div className="flex gap-2 ">
          {page > 1 && (<button onClick={() => { changeHandler(page - 1) }}>Previous</button>)}
          {page < pages && (<button onClick={() => { changeHandler(page + 1) }}>Next</button>)}

        </div>
        <p><span>page</span>{page}<span>of</span>{pages}</p>

      </div>

    </div>
  )
};

export default Pageinitiaton;
