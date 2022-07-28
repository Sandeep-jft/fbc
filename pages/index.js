import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next learn</title>
      </Head>
      <Link href='/product' >
      <a>Go to product page</a>
      </Link>
    </div>
  )
}
