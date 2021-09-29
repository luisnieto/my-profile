import Head from 'next/head'
import Nav from '../components/Layout/Nav'
import { useEffect } from "react"
import '../scss/styles.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // document.querySelector("body").classList.add("has-navbar-fixed-top")
  }, [])

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav></Nav>
    <Component {...pageProps} />
  </>
}

export default MyApp
