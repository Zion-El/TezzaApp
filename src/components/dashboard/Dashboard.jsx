import React, { useState } from 'react'
import TopNav from './common/TopNav'
import SideNav from './common/Drawer'
import EastIcon from '@mui/icons-material/East';


const Dashboard = () => {
    const [toggle, setToggle] = useState(false)
    const toggleButton =()=>{
        setToggle(!toggle)
    }
  return (
    <div className='bg-gray-50 min-h-[100vh] w-full'>
        <TopNav isclicked={toggleButton} click={toggle}/>
        <div className='flex justify-between w-full min-h-[100vh] '>
            <div className={`lg:w-[20%] w-[50%] md:w-[40%] h-[100vh] ${toggle?'block absolute z-[100]' :'hidden'} lg:block lg:relative`}>
                <SideNav/>
            </div>

            <div className='lg:w-[80%] pt-[50px] lg:pt-[100px] relative '>
                <div className='w-full p-6 md:p-12 space-y-8'>
                    <div>
                        <h2 className='font-[700] leading-8'>
                            Your Workspace
                        </h2>
                        <p className='text-[#898989] text-sm'>Welcome, XXX</p>
                    </div>

                    <div className='w-full space-y-8'>
                        <h4 className='font-[700]'>Overview</h4>

                        <div className='flex flex-col md:flex-row md:justify-between flex-wrap w-full gap-6 md:gap-6  lg:gap-12'>
                            {/* card 1 */}
                            <div className='md:w-[48%] lg:w-[40%]'>
                                <div className='border-t-[6px] h-[40px] bg-[#DDAA33] bg-opacity-10 w-full border-[#DDAA33] flex items-center justify-between px-6'>
                                    <h2 className='text-sm font-[700]'>Today's Agenda</h2>
                                </div>
                                <div className='w-full flex justify-center items-center bg-white py-10 px-2 min-h-[120px]'>
                                    <p className='font-[500] text-[#898989] text-[12px] md:text-sm'>You don't have any activity scheduled for today</p>
                                    <button className='text-[#DDAA33] text-sm ml-4'>Add</button>
                                </div>
                            </div>

                            {/* card 2 */}
                            <div className='md:w-[48%] lg:w-[40%]'>
                                <div className='border-t-[6px] h-[40px] bg-[#DDAA33] bg-opacity-10 w-full border-[#DDAA33] flex items-center justify-between px-6'>
                                    <h2 className='text-sm font-[700]'>Activity Report </h2>
                                    <button className='text-[#DDAA33] text-[12px]'>View full activity report <span><EastIcon fontSize="small"/></span></button>
                                </div>
                                <div className='w-full bg-white p-2 min-h-[120px]'>
                                    <div className='flex items-center w-full'>
                                        <div className='w-[50%] h-[1px] bg-[#898989]'></div>
                                        <p className='font-[500] text-[#898989] text-[12px]'>Tuesday (18th Sept, 2019)</p>
                                    </div>
                                    <div className='w-full'>
                                        <div className='w-[40%]'>
                                            <p className='font-[500] text-[#898989] text-[12px]'>You added a new client</p>
                                            <p className='text-right text-[12px] font-[500] text-[#DDAA33]'>Odusote Mayokin</p>
                                            <button className='text-[#898989] float-right border-l-2 border-[#DDAA33] bg-[#DDAA33] bg-opacity-10 p-1 font-[500] text-[10px]'>Status Pending</button>
                                        </div>

                            
                                    </div>
                                    
                                </div>
                            </div>

                            {/* card 3 */}
                            <div className='md:w-[48%] lg:w-[40%]'>
                                <div className='border-t-[6px] h-[40px] bg-[#DDAA33] bg-opacity-10 w-full border-[#DDAA33] flex items-center justify-between px-6'>
                                    <h2 className='text-sm font-[700]'>Task that are due</h2>
                                    <button className='text-[#DDAA33] text-[12px]'>Create Task <span><EastIcon fontSize="small"/></span></button>
                                </div>
                                <div className='w-full flex justify-center items-start bg-white p-2 min-h-[120px]'>
                                    <div className='bg-[#DDAA33] bg-opacity-10 rounded-md p-2 w-[93%] flex justify-between'>
                                        <p className='font-[500] text-[#898989] text-sm'>Follow up with <span className='text-[#DDAA33]'>Odusote</span></p>
                                        <button className='text-[#DDAA33] text-sm ml-4'>Add</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            

            
        </div>
        
    </div>
  )
}

export default Dashboard
