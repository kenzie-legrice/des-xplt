import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";

export default function Reported( { posts }){
    return (
      <div>
        <Navbar />
        <div>
        {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <ul>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                            ))}
                        </ul>
                    )}
        </div>
      </div>
    );
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/reportPosts`);
  // extract the data
  let data = await response.json();

  return {
      props: {
          posts: data['message'],
      },
  };
}

// export async function getServerSideProps(){

//     const response = await fetch('http://localhost:3001/api/v1/reportedusers')
  
//     const todos = await response.json()
  
//     console.log(response)
  
//     return {
//       props: {
//         todos,
//       },
//     }
//   }