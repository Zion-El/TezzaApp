import React, { useState } from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Logo from '../../../assets/new.png'

const TopNav = ({isclicked, click}) => {

  return (
    <div>
        <div className='fixed right-0 w-full lg:w-[100%] z-[999] shadow-sm'>
                    {/* <Nav/>                 */}

            <div className='w-full h-[60px] lg:h-[80px] bg-[#fff] flex px-3 md:px-10 items-center justify-between'>
                    <div className='lg:hidden'>
                        <button onClick={isclicked}>
                            {click? <CloseIcon/>:<MenuIcon color="black"/>}
                        </button>
                    
                    </div>
                    <img className='hidden lg:block h-[50px] w-[50px]' src={Logo} alt="logo" />
                <div className='flex sm:space-x-4 lg:space-x-12 justify-center items-center '>
                    <div className='relative'>
                        <NotificationsNoneOutlinedIcon/>
                        <div className='h-2 w-2 bg-red-500 rounded-full absolute top-1 right-1 flex justify-center items-center '><small className='text-white text-[6px]'>2</small></div>
                    </div>

                    <div className='flex justify-center items-center space-x-2 '>
                        <div className='lg:hidden bg-[#DDAA33] rounded-full justify-center items-center p-2'>
                            <Avatar color='white'  name='Kalu Abasiama' src='https://bit.ly/broken-link' />
                        </div>


                        <h2 className='hidden lg:block text-[16px] font-[700] text-[#2B2B2B] text-[inter]'>Kalu Abasiama</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TopNav
