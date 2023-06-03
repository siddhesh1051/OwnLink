import React, { useState } from 'react'
import { Avatar, Box, Tab,Tabs, TextField} from '@mui/material';
import { TabPanel,TabList, TabContext} from '@mui/lab';
import "../../src/App.css"


const Right = () => {
  const [value, setvalue] = useState('1')
  const handleChange = ( event,newVal ) =>{
        setvalue(newVal)
    }

  return (
    <div className='flex-1' >
     <TabContext value={value}>
  
    <TabList onChange={handleChange} aria-label="lab API tabs example"  textColor='[white]' indicatorColor='secondary'>
 
      <Tab label="Bio" value="1" />
      <Tab label="Links" value="2" />
      <Tab label="Appearance" value="3" />
      
    </TabList>
  <TabPanel value="1">
    <div className=' flex justify-center' >

  <Avatar alt="Remy Sharp" src="https://api.multiavatar.com/kitty.svg" />
    </div>
    <div className=' flex justify-center gap-4 flex-col' >
      <div  className='flex justify-start gap-4 '>

  <TextField id="filled-basic" label="Username" variant="filled" placeholder='Choose a Username' fullWidth  color="secondary" sx={{ input: { color: 'white' } }} />
  <TextField id="filled-basic" label="Name" variant="filled" placeholder='Full Name' fullWidth/>

      </div>
    <div>

  <TextField id="filled-basic" label="Description" variant="filled" placeholder='Description'fullWidth/>
    </div>
    </div>
 
  </TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
  
</TabContext>
 </div>
  )
}

export default Right
