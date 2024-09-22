'use client'
import React from 'react'
import axios from 'axios';
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  
  async function  submintHandler(formData) {
 
    
try {
    const response = await  axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
console.log(response.status)
if(response.status === 200){
  router.push('/')
}

} catch (error) {
  console.log(error)
}
    


// try {
//     await fetch('http://localhost:5000/upload', {
//       method: 'POST',
//       body: formData
//     })
// } catch (error) {
//   console.log(error)
// }

   
  }

  return (
    <div className='container m-2 md:m-[10%] flex-col justify-center items-center'>
<h1 className="text-[1rem] font-semibold">Upload File</h1>
<form action={submintHandler}>
    <div className='flex flex-col gap-3'>
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Select file</label>
<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
id="file_input"
 name="file"
 type="file" />
<button type="submit" className='bg-violet-700 px-5 py-2 rounded-xl text-gray-300' >Upload File</button>
</div>
</form>

    </div>
  )
}

export default page