import React from "react"
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function ThirdPage(){
    return(
	
	<>
	    <h1 Style={"text-align:center"}>Fitting中...</h1>
	    <p className={styles.description}>
            <Link href = "/fourth-page">
	    <button>
	    <a>強制終了</a>
	    </button>
  	    </Link>
	    </p>
	</>
    )
}
