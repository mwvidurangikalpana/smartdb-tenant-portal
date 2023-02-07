import React, { useState } from 'react'
import Head from 'next/head'

const CreateIndex = () => {
  const [id, setTenantId] = useState('')
  const [name, setIndexName] = useState('')
  const [shards, setShardsCount] = useState('')
  const [replicas, setReplicasCount] = useState('')
  const [message, setMessage] = useState('')

  let handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      let res = await fetch(
        'https://butq3lt5uk.execute-api.eu-west-2.amazonaws.com/stage/users',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
          }),
        },
      )
      let resJson = await res.json()
      if (res.status === 201) {
        setIndexName('')
        setTenantId('')
        setShardsCount('')
        setReplicasCount('')
        setMessage('User created successfully')
      } else {
        setMessage('Some error occurred')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Head>
        <title>Opensearch Index Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1 id="title">Create New Index</h1>
        </div>

        <br></br>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Tenant Id"
              onChange={(e) => setTenantId(e.target.value)}
            />

            <br></br>

            <input
              type="text"
              value={name}
              placeholder="Index Name"
              onChange={(e) => setIndexName(e.target.value)}
            />

            <br></br>

            <input
              type="text"
              value={name}
              placeholder="Number of shards"
              onChange={(e) => setShardsCount(e.target.value)}
            />

            <br></br>

            <input
              type="text"
              value={name}
              placeholder="Number of Replicas"
              onChange={(e) => setReplicasCount(e.target.value)}
            />

            <br></br>
            <br></br>

            <button type="submit" style={{ backgroundColor: '#008080' }}>
              Create
            </button>

            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default CreateIndex
