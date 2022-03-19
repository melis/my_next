import axios from 'axios';
import React from 'react';
import Link from 'next/link'
export async function getStaticProps({ params: { id }}) {
   const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const users =await axios.get('https://jsonplaceholder.typicode.com/users')
    const user= users.data.reduce((u, el)=>{ 
          if(el.id==data.userId){ return el};
     return u}, null)
   return {
     props: { post: data, user }, 
   }
 }

 export async function getStaticPaths(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data= await res.json()
    return {
      paths: data.map(p=>({  params: { id: String(p.id) } })),
      fallback: false
    }
  }


function Post({post, user}) {

    return (
        <div>
            <Link href='/' scroll={true}> home</Link>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{user.name}</p>
        </div>
    );
}

export default Post;