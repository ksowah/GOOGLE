import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { useRef } from 'react'
import Button from './Button'

const Header = () => {

    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e)=>{
        e.preventDefault()
        const term = searchInputRef.current.value
        if(!term)return
        router.push(`/search?term=${term}`)
    }

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
        <Image 
            src={'https://th.bing.com/th/id/R.22afc01b435c8b4e5e73040370bf1cb0?rik=EHaX4gDt5YWFGQ&pid=ImgRaw&r=0'}
            height={40}
            width={120}
            className={'cursor-pointer'}
            onClick={()=> router.push('/')}
        />

        <form className='flex flex-grow border border-gray-200 rounded-full 
        shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5 items-center'>
            <input type='text' ref={searchInputRef}
                className={'flex-grow w-full focus:outline-none'}
            />

        <XIcon
            className='h-7 text-gray-500 cursor-pointer 
            sm:mr-3 transition duration-100 transform hover:scale-125'
            onClick={()=> searchInputRef.current.value=''}
        />
        <MicrophoneIcon
            className={'h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'}
        />
        <SearchIcon
            className='h-6 text-blue-500 hidden sm:inline-flex'
        />

        <button hidden type='submit' onClick={search} className=''>search</button>
        </form>

        <Button/>

        </div>
       
    </header>
  )
}

export default Header