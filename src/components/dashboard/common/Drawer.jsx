import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navigation } from './data';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

const SideNav = () => {
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)
  return (
    <div className='w-full h-full bg-[#fff]'>

      <div className='lg:hidden'>
          <button onClick={()=>setToggle(!toggle)}>
                  {!toggle? <CloseIcon/>:<MenuIcon color="black"/>}
            </button>
                    
        </div>

      <div className='bg-cover bg-center'>

        {/* <img className='hidden lg:block' src={Flag} alt="lag" />         */}

      </div>
      <div className='pt-10 md:pt-20 lg:pt-20 lg:mt-10 flex flex-col'>
        {
          navigation.map((item, index)=>
            <Link className={`py-4 font-[600] text-[12px] md:text-sm px-4 ${isActive ? 'text-[#DDAA33] border-l-2 border-[#DDAA33] active': ''}`} key={index} to={item.url}>
              {item.title}
            </Link>
          )
        }

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' sx={{ py:'8px', px:'16px', fontWeight:'600', fontSize:'14px'}}>
                  Reports
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className='flex flex-col space-y-6 px-10'>
                <Link>Item 1</Link>
                <Link>Item 2</Link>                
              </div>

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default SideNav
