

import Link from 'next/link'



const Menu = () => {
 

//console.log(session)

//var cartCount = cartData.length;

  return (
    <>
    <div className='flex items-center gap-4 justify-between w-full'>
     <div className='flex items-center gap-4 justify-start w-full uppercase underline'>
    <div><Link href="/">File List</Link></div> 
    <div><Link href="/fileupload">Upload File</Link></div>
     </div>
   
     <div className='w-[200px]'>IdeaPlus Software</div>
   
    </div>
    
    </>
  )
}

export default Menu