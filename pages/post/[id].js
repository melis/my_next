import axios from 'axios';
import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

export async function getStaticProps({ params: { id }}) {
    try{
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!data){
        throw new Error()
        }
        const users =await axios.get('https://jsonplaceholder.typicode.com/users')
        const user= users.data.find(u=>u.id===data.userId)

        return {
            props: { post: data, user, time: new Date().toString() }, 
            revalidate: 10, // In seconds
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
      fallback: true,
    }
  }


function Post({post, user, time}) {
  const router=useRouter();
  console.log(router)
  if (router.isFallback){
    return <div>loading...</div>
  }
    return (
        <div>
            <Link href='/' scroll={true}> home</Link>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{user.name}</p>
            <p>{time}</p>
        </div>
    );
}

export default Post;