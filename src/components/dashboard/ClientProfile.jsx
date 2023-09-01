import React, { useEffect, useState } from 'react'
import TopNav from './common/TopNav'
import SideNav from './common/Drawer'
import { Link, useParams } from 'react-router-dom'
import { userData } from './common/data'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


const ClientProfile = () => {
    const {id} = useParams()
    const  [data, setData] = useState()

    const [toggle, setToggle] = useState(false)
    const toggleButton =()=>{
        setToggle(!toggle)
    }
    
    useEffect(()=>{

        setData(userData.filter(item=> item.id === Number(id)))
    },[])

  return (
    <div className='bg-gray-50 h-[100vh] w-full'>
        <TopNav isclicked={toggleButton} click={toggle}/>
        <div className='flex justify-between w-full h-full '>
            <div className={`lg:w-[20%] w-[50%] md:w-[40%] h-full ${toggle?'block absolute z-[100]' :'hidden'} lg:block lg:relative`}>
                <SideNav/>
            </div>

            {
                data ?
                    <div className='w-full lg:w-[80%] pt-[100px] relative space-y-10'>
                        <div className='w-full px-4 lg:p-12'>
                            <div>
                                <h2 className='font-[700] leading-8'>
                                    Client's Profile
                                </h2>
                                <p className='text-[#898989] text-sm'>View Client's Profile Here</p>
                            </div>

                            <div className='w-full overflow-x-hidden bg-white rounded-md px-6 py-10 space-y-8'>

                                <div className='w-full p-3 bg-gray-50 rounded-md'>
                                    <h4></h4>
                                    <div className='flex justify-between sm:justify-normal items-center py-3 gap-2'>
                                        <div className='rounded-full bg-gray-400 h-[70px] w-[70px]' >
                                            <Avatar src='https://bit.ly/broken-link' />
                                        </div>
                                        <div className='space-y-2'>
                                            <h4 className='font-[700] text-sm'>{data[0].clientName}</h4>
                                            <p className='text-[#898989] text-opacity-80 font-[500]  text-[12px] md:text-[14px]'>{data[0].email}</p>
                                            <div className='flex justify-between w-[100%]'>
                                                <p className='text-[#898989] text-opacity-80 font-[500] text-[12px] md:text-[14px]'>{data[0].gender}</p>
                                                <p className='text-[#898989] text-opacity-80 font-[500] text-[12px] md:text-[14px]'>{data[0].age} years old</p>
                                                <p className='text-[#898989] text-opacity-80 font-[500] text-[12px] md:text-[14px]'>{data[0].nationality}</p>
                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col md:flex-row justify-between lg:justify-normal gap-5 lg:gap-20'>
                                    <div className='space-y-4'>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Full Name</p>
                                            <p className='font-[700] text-[14px]'>{data[0].clientName}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Applicant FullName <span className='font-[400] text-[#AB201F] text-[12px]'>(as shown in passport)</span></p>
                                            <p className='font-[700] text-[14px]'>{data[0].fullname}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <p className='text-[#898989] text-opacity-80 font-[500] text-[14px]'>Place of Birth</p>
                                                <p className='font-[700] text-[14px]'>{data[0].nationality}</p>                                                
                                            </div>
                                            <div>
                                                <p className='text-[#898989] text-opacity-80 font-[500] text-[14px]'>Date of Birth</p>
                                                <p className='font-[700] text-[14px]'>{data[0].dob}</p>                                                
                                            </div>

                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Marital Status</p>
                                            <p className='font-[700] text-[14px]'>{data[0].marital_status}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Current Occupation</p>
                                            <p className='font-[700] text-[14px]'>{data[0].occupation}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Residential Address</p>
                                            <p className='font-[700] text-[14px]'>{data[0].res_address}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Country of Interest</p>
                                            <p className='font-[700] text-[14px]'>{data[0].country_of_interest}</p>
                                        </div>
                                    </div>

                                    <div className='space-y-4'>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Email</p>
                                            <p className='font-[700] text-[14px]'>{data[0].email}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Gender</p>
                                            <p className='font-[700] text-[14px]'>{data[0].gender}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Country of Citizenship</p>
                                            <p className='font-[700] text-[14px]'>{data[0].citizen}</p>
                                        </div>
                           
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Education<span className='font-[400] text-[#AB201F] text-[12px]'>(Client's highest level of education)</span></p>
                                            <p className='font-[700] text-[14px]'>{data[0].education}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Phone Number</p>
                                            <p className='font-[700] text-[14px]'>{data[0].phone}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Mailing Address</p>
                                            <p className='font-[700] text-[14px]'>{data[0].mail_address}</p>
                                        </div>
                                        <div>
                                            <p className='font-[500] text-[12px] text-[#898989] text-opacity-80'>Purpose of Traveling</p>
                                            <p className='font-[700] text-[14px]'>{data[0].purpose}</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex justify-end'>
                                        <Link to='/clients' className='text-white bg-[#DDAA33] rounded-md py-2 px-6'>
                                            Back
                                        </Link>
                                    </div>


                            </div>
                            
                        </div>

                    </div>
                :
                <h3>No data found</h3>
            }

            

            
        </div>
        
    </div>
  )
}

export default ClientProfile
