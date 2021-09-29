import Head from 'next/head'
import Resume from '../components/Home/Resume'
import Techonologies from '../components/Home/Technologies'
import Volunteering from '../components/Home/Volunteering'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luis Nieto - Home</title>
        <meta name="description" content="This is my space to know me" />
      </Head>

      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body">
          <p className="title">
            Fullheight hero with navbar
          </p>
        </div>
      </section>

      <section className="container p-3">
        <Resume></Resume>
      </section>

      <section className="container p-3">
        <Techonologies></Techonologies>
      </section>

      <section className="container p-3">
        <Volunteering></Volunteering>
      </section>
    </div>
  )
}
