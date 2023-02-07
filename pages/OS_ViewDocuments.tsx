import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';

interface Data {
    id: string;
    name: string;
}
  
const data: Data[] = [
    { id: 'd001', name: 'Document 1' },
    { id: 'd002', name: 'Document 2' },
    // ...
];

const DataTable: React.FC = () => {
    return (
        <div>
          <Head>
            <title>OpenSearch Index Management</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <div>
              <h1 id="title">All Documents of Index</h1>
            </div>
    
            <br></br>
    
            <div style={{ display: 'flex', justifyContent: 'center' ,textAlign: 'center'}}>
                <table>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((datum) => (
                            <tr key={datum.id}>
                            <td>{datum.id}</td>
                            <td>{datum.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </main>
        </div>
    )

}

export default DataTable;