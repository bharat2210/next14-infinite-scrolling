import React from 'react'

const Card = ({content}:any) => {
  return (
    <>
  {content && content?.map((data:any,i:any)=>(
   <div className="w-[300px] rounded-md border" key={i}>
   <img
     src={data?.url}
     alt="Laptop"
     className="h-[200px] w-full rounded-md object-cover"
   />
   <div className="p-4">
     <h1 className="text-lg font-semibold">{data?.title}</h1>
     
     <button
       type="button"
       className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
     >
       {i+1}
     </button>
   </div>
 </div>
  )) }
    
    
    </>
  )
}

export default Card