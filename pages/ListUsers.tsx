import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const ListUser = () => {
  const [post, getPost] = useState([])
  const API =
    'https://butq3lt5uk.execute-api.eu-west-2.amazonaws.com/stage/users'
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        getPost(res.data)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <div>
      <Head>
        <title>User Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1 id="title">List All Users</h1>;
        </div>
      </main>
    </div>
  )
}

export default ListUser
