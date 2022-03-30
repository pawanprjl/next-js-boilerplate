import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>

      <div className={'h-screen flex bg-amber-100 justify-center items-center'}>
        <div>hello from next js templates</div>
      </div>
    </>
  )
}

export default Home
