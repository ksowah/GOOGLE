import { useRouter } from "next/router"
import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

const PaginationButtons = () => {

    const router = useRouter()
    const startIndex = Number(router.query.start)  || 0
  return (
    <div>
        {startIndex >= 10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                <div>
                    <ChevronLeftIcon className='h-5'/>
                    <p>Previous</p>
                </div>
            </Link>
        )}

        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div>
            <ChevronRightIcon className='h-5'/>
            <p>Next</p>
        </div>
        </Link>
    </div>
  )
}

export default PaginationButtons