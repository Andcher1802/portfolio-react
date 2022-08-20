
import { useState } from 'react';
const PostItem = ({children, post}) => {
  const [condition, setCondition] = useState(false)
  return (
    <>
    <div className='mb-10'>
    <div className="text-center">Component №{post.id} - {post.name}</div>
    <hr className="mt-2"/>
    {
      condition
      ?<div className="mt-4 bg-slate-50 rounded-lg p-5 flex justify-center">{children}</div>
      :<div className='text-center my-2'>
        <button className='bg-slate-500 rounded-md w-1/2 text-white shadow-lg' onClick={()=>setCondition(true)}>Show</button>
      </div>   
    }
    </div>
  </>
  )
}

export default PostItem