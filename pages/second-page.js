import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useFileUpload } from "use-file-upload";

const defaultSrc =
    "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";

export default function SecondPage(){
  const [files, selectFiles] = useFileUpload();
    return(
	<>
	    <Head><title>フィットさせる画像を選択</title></Head>
	    <h1 Style={"text-align:center"}>画像をアップロードしてください</h1>
      <div style={{
        textAlign: "center"
      }}>
      <img src={files?.source || defaultSrc} alt="preview" style={{
        width: "300px",
        padding: "1em",
      }
      }/>
      </div>
	    <p  className={styles.description}>
	    <button
      onClick={() =>
            selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
              console.log("Files Selected", { name, size, source, file });
            })
          }
          >
          画像を選択
      </button>
	    </p>
	    <br/>
	    <p className={styles.description}>
	    <Link href = "/third-page">
	    <a Style={"text-align:center"}>
	    <button>この画像でフィッティングを開始</button>
	    </a>
	    </Link>
	    </p>
	</>
    )
};
