import React, { useEffect, useState } from 'react'
import TopNav from './common/TopNav'
import SideNav from './common/Drawer'
import { userData } from './common/data'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Client = (id) => {
    const [data, setData] = useState()
    const [value, setValue] = useState('')

    const [toggle, setToggle] = useState(false)
    const toggleButton =()=>{
        setToggle(!toggle)
    }

    const handlefilter =() =>{
        if (value === ''){
            setData(userData)
        }else{
            const result = userData.filter(item => item.clientName.includes(value) | item.email.includes(value.toLowerCase()) | item.purpose.includes(value))
            setData(result)
        }
    }

    useEffect(()=>{ 
        handlefilter()
    }, [value])
  return (
    <div className='bg-gray-50 h-[100vh] w-full'>
        <TopNav isclicked={toggleButton} click={toggle}/>
        <div className='flex justify-between w-full h-full '>
            <div className={`lg:w-[20%] w-[50%] md:w-[40%] h-full ${toggle?'block absolute z-[100]' :'hidden'} lg:block lg:relative`}>
                <SideNav/>
            </div>

            <div className='w-full lg:w-[80%] pt-[80px] lg:pt-[100px] relative space-y-10'>
                <div className='w-full p-4 lg:p-12'>
                    <div>
                        <h2 className='font-[700] leading-8'>
                            Client
                        </h2>
                        <p className='text-[#898989] text-sm'>Here's the clients list</p>
                    </div>

                    <div className='w-full  bg-white rounded-md px-1 md:px-3 lg:px-6 py-10'>

                        <div className='w-full flex space-x-4'>
                            <div className='flex bg-transparent z-10  rounded-md w-[80%] border border-[#B5B6B5] h-[40px]'>
                                <input className='border-none placeholder:text-sm outline-none w-full px-6 rounded-md' onChange={(e)=>setValue(e.target.value)} placeholder='Search by name, email ...' type="text" name="" id="" />

                            </div>
                            <button className='h-[40px] border shadow-sm w-[18%] bg-[#DDAA33] rounded-md flex justify-center items-center space-x-3'>
                                <p className='md:hidden text-white text-[inter] font-[500] text-sm'>+</p>
                                <p className='hidden md:block text-white text-[inter] font-[500] text-sm'>Add new Client</p>
                            </button>
                        </div>

                        <div className='pt-4 md:p-2 lg:w-full'> 
                            <div className='flex gap-4 w-full  rounded-tr-md rounded-tl-md px-1 md:px-3 bg-[#DDAA33] bg-opacity-10 py-3 border-b-2 border-b-[#DDAA33] '>
                                <div className='w-[20%]'>
                                    <p className='text-[14px] font-[700]'>Name</p>
                                </div>
                                <div className='hidden lg:block w-[30%]'>
                                    <p className='text-[14px] font-[700]'>Email</p>
                                </div>
                                <div className='w-[30%] md:w-[20%]'>
                                    <p className='text-[14px] font-[700]'>Phone</p>
                                </div>
                                <div className='w-[50%]  md:w-[30%]'>
                                    <p className='text-[14px] font-[700]' >Residential Address</p>
                                </div>  
                            </div>


                                {
                                    data?
                                    data.map((item, index) =>{
                                        return(
                                            <Link to={`/client-profile/${item.id}`} key={index} className='flex gap-4 w-full hover:bg-[#DDAA33] hover:bg-opacity-10 md:px-2 hover:border-l-2 hover:border-[#DDAA33]'>
                                                <div className='w-[20%] py-3 '>
                                                    <p className='text-[12px] md:text-[14px] text-[#3E4954]'>{item.clientName}</p>
                                                </div>
                                                <div className='hidden lg:block w-[30%] py-3'>
                                                    <p className='text-[12px] md:text-[14px] text-[#3E4954]'>{item.email}</p>
                                                </div>
                                                <div className='w-[30%] md:w-[20%] py-3'>
                                                    <p className='text-[12px] md:text-[14px] text-[#3E4954]'>{item.phone}</p>
                                                </div>
                                                <div className='w-[50%] md:w-[30%] py-3'>
                                                    <p className='text-[12px] md:text-[14px] text-[#3E4954]' >{item.res_address}</p>
                                                </div>  
                                            </Link>
                                        )
                                    })
                                    :
                                    null
                                }


                        </div>
                    </div>
                    
                </div>

            </div>
            

            
        </div>
        
    </div>
  )
}

export default Client
