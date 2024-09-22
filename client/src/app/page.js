"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";


function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [deletede, setDeleted ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:5000/files"
        );
        console.log("data", response);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [deletede]);

  async function deleteHandler(id) {
    console.log(id)
    try {
  const response =  await axios.delete(`http://localhost:5000/files/${id}`)
  console.log(response)
  if(response.status === 200){
    setDeleted((preveous)=>!preveous)
  }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full px-2">
    
      <h1 className="text-[1rem] font-semibold">Uploaded File list</h1>

      <div className="flex justify-between border-b-2 w-full gap-2 my-2">
        <div className="text-[1rem] w-[10%]">Id</div>
        <div className="text-[1rem] w-[40%]">Link</div>
        <div className="text-[1rem] w-[25%]">File Name</div>
        <div className="text-[1rem] w-[25%]"></div>
      </div>
      {data.map((item) => {
        return (
          <div key={item.id} className="flex justify-between border-b-2 w-full gap-2 my-2 py-2">
            <div className="text-[.7rem] w-[10%]"> {item.id}</div>
            <div className="text-[.7rem] w-[40%]"> {item.slug}</div>
            <div className="text-[.7rem] w-[25%]">{item.title}</div>
            
            <div className="text-[.7rem] w-[25%]">
              <button onClick={()=>deleteHandler(item.id)} className='bg-violet-700 px-5 py-2 rounded-xl text-gray-300'>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
