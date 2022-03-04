import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Pizza({toppings}) {
  return (
    <div className={styles.container}>
     
      <main className={styles.main}>
        <h1 className={styles.title}>
         My favorite Pizza Toppings
        </h1>
        <ul className='toppings'>
          {toppings.map(topping => {
            return <li key={topping}>{topping}</li>
          })}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const pizzaToppings = [
    "Pineapple",
    "Ham",
    "Pepperoni",
    "Jalapeno",
    "Green peppers"
  ];

  return {
    props: {
      toppings: pizzaToppings
    }
  }
} 