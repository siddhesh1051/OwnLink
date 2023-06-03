import React, { useState } from 'react'
import { Box, Tab,Tabs} from '@mui/material';
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
  
    <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
 
      <Tab label="Bio" value="1" textColor="secondary"
  indicatorColor="secondary"/>
      <Tab label="Links" value="2" />
      <Tab label="Appearance" value="3" />
      
    </TabList>
  <TabPanel value="1">
  <input className="inputBox"
            type="password"
            placeholder="Password"
            name='password'
            autoComplete='off'
           
            
          />
  </TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
  
</TabContext>
 </div>
  )
}

export default Right
