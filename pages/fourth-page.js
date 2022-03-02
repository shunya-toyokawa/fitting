import Link from 'next/link'
import Head from 'next/head'

export default function ThirdPage(){
    return(
	<>
	    <h1 Style={"text-align:center"}>結果表示</h1>
	    <Link href = "/second-page">
	    <a Style={"text-align:center"}>
	    <button>最初に戻る</button>
	    </a>
	    </Link>
	</>
    )
}
