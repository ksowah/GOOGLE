
const SearchResults = ({results}) => {
  return (
    <div>
        <p>About {results.searchInformation?.formattedTotalResults} results</p>
    </div>
  )
}

export default SearchResults