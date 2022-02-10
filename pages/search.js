import Head from "next/head"
import Header from "../components/Header"
import { Key } from "../keys"

const Search = () => {
  return (
    <div>

        <Head>
            <title>
                Search Results
            </title>
        </Head>

        <Header/>
        
    </div>
  )
}

export default Search


export const getServerSideProps = async (context)=> {
    const useDummyData = false

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${Key}`)
}
