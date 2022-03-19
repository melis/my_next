import axios from 'axios'
import Link from 'next/link'

export async function getStaticProps() {
 
   const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
  
   if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, 
  }
}

const Home=({data})=> {
  return (
   <ul>{data.map(post=><li key = {post.id} style={{padding: '5px'}} >{post.id}  <Link href={`/post/${post.id}`} >{post.title}</Link></li>)}</ul>
     )
}

export default Home