import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Snacks({snacks}) {
  return (
    <div className={styles.container}>
     
      <main className={styles.main}>
        <h1 className={styles.title}>
         My favorite Snacks 
        </h1>
        <ul className='snacks'>
          {snacks.map(snack => {
            return <li key={snack}>{snack}</li>
          })}
        </ul>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const favoriteSnacks = [
    "Chips",
    "Popcorn",
    "M&Ms",
    "Rice Cakes",
    "Jerky"
  ];

  return {
    props: {
      snacks: favoriteSnacks
    }
  }
} 