import Head from "next/head"
import Header from "../components/Header"
import { Key, context_key } from "../keys"

const Search = ({results}) => {
    console.log(results);
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

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${Key}&cx=${context_key}&q=${context.query.term}`
    ).then(response => response.json())

    return {
        props:{
            results: data
        }
    }
}
