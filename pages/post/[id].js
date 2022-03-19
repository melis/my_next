import axios from 'axios';
import React from 'react';
import Link from 'next/link'

export async function getStaticProps({ params: { id }}) {
    try{
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!data){
        throw new Error()
        }
        const users =await axios.get('https://jsonplaceholder.typicode.com/users')
        const user= users.data.reduce((u, el)=>{ 
          if(el.id==data.userId){ return el};
          return u}, null)

        return {
            props: { post: data, user }, 
        }

    }catch(e){
        return {
            notFound: true,
          }
    }
 }

 export async function getStaticPaths() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data= await res.json()
    return {
      paths: [{params: {id: "1"}}, ] ,
      fallback: 'blocking',
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