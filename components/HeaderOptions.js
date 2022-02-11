import HeaderOptionsSingular from "./HeaderOptionsSingular"
import { 
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PlayIcon,
    SearchIcon,
    PhotographIcon
 } from '@heroicons/react/solid'


const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly 
    text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
        <div className='flex space-x-6'>
            <HeaderOptionsSingular Icon={SearchIcon} title='All' selected/>
            <HeaderOptionsSingular Icon={PhotographIcon} title='Images' />
            <HeaderOptionsSingular Icon={PlayIcon} title='Videos' />
            <HeaderOptionsSingular Icon={NewspaperIcon} title='News' />
            <HeaderOptionsSingular Icon={MapIcon} title='Maps' />
            <HeaderOptionsSingular Icon={DotsVerticalIcon} title='More' />
        </div>
        <div className='flex space-x-4'>
            <p className='link'>Settings</p>
            <p className='link'>Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions