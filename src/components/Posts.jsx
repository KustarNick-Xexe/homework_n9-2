import Post from './Post';
import Create from './Create';

const Posts = ({ posts }) => {
  return (
    <>
        <Create />
        { posts.map((post, index) => 
                { return <Post key={ index } info={ post } /> } ) }
    </>
  )
};

export default Posts;