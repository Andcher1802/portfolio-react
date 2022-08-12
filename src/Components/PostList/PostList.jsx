import PostItem from '../PostItem/PostItem';
import Calculator from '../Calculator/Calculator';
const PostList = () => {
  return (
    <>
      <PostItem post={{name:'Simple Calculator', id:1}}>
        <Calculator/>
      </PostItem>
    </>
  )
}

export default PostList