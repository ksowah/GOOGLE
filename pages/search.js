import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/Header"
import SearchResults from "../components/SearchResults"
import Key, { context_key } from "../keys"
import Response from "../Response"

const Search = ({results}) => {
    const router = useRouter()
  return (
    <div>

        <Head>
            <title>
                {router.query.term} - Google Search
            </title>
        </Head>

        <Header/>

        <SearchResults
            results={results}
        />
        
    </div>
  )
}

export default Search


export const getServerSideProps = async (context)=> {
    const useDummyData = false
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${Key}&cx=${context_key}&q=${context.query.term}`
    ).then(response => response.json())

    return {
        props:{
            results: data
        }
    }
}
