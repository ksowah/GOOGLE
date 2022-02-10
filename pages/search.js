import Head from "next/head"
import Header from "../components/Header"

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
    
}
