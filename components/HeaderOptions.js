import HeaderOptionsSingular from "./HeaderOptionsSingular"
import { 
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PlayIcon,
    SearchIcon
 } from '@heroicons/react/solid'


const HeaderOptions = () => {
  return (
    <div>
        <div className='flex space-x-4'>
            <HeaderOptionsSingular Icon={SearchIcon} title='All' selected/>
        </div>
        <div className='flex space-x-4 items-center'>
            <p className='link'>Settings</p>
            <p className='link'>Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions