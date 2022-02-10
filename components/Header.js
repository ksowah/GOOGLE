import Image from 'next/image'
import {useRouter} from 'next/router'
import { useRef } from 'react'

const Header = () => {

    const router = useRouter()
    const searchInputRef = useRef(null)

  return (
    <header>
        <Image 
            src={'https://th.bing.com/th/id/R.22afc01b435c8b4e5e73040370bf1cb0?rik=EHaX4gDt5YWFGQ&pid=ImgRaw&r=0'}
            height={40}
            width={120}
            className={'cursor-pointer'}
            onClick={()=> router.push('/')}
        />

        <form className='flex border border-gray-200 rounded-full 
        shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5 items-center'>
            <input type='text' ref={searchInputRef}
                className={'flex-grow w-full focus:outline-none'}
            />
        </form>
    </header>
  )
}

export default Header