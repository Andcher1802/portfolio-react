
const PostItem = ({children, post}) => {
  return (
    <div className="mb-5">
      <div className="text-center">Component №{post.id} - {post.name}</div>
      <hr className="my-2"/>
      <div className="mt-4 bg-slate-50 rounded-lg p-5 flex justify-center">
        {children}
      </div>
    </div>
  )
}

export default PostItem