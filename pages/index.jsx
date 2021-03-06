import Head from 'next/head'
import DiscoverToday from '../componets/DiscoverToday'
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>New Adventure</title>
        <meta name="description" 
content="This is an example of a meta description. 
This will often show up in search results." />
        <link rel="icon" href="/favicon.ico" />
        <link defer rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link defer href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <DiscoverToday />
      </main>
    </div>
  )
}
