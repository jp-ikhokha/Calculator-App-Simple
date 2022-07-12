import Head from 'next/head'
import Image from 'next/image'

//Components
import Calculator from '@/components/Calculator/Calculator'

//Styles
import styles from '@/pages/index.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cool-culator App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        />
      </Head>
       <header className={styles.header}><h1>Cool-culator App</h1></header>
      <main>       
        <Calculator />        
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.equalexperts.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          
            <Image src="/logo.svg" alt="EE Logo" width={198} height={52} />
          
        </a>
        <small>JP Venter 2022-07-11</small></footer>
    </div>
  )
}
