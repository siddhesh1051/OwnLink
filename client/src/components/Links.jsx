import React, { useEffect } from 'react'
import Button from '@mui/joy/Button';

import LinkDiv from './LinkDiv'
import { useDispatch, useSelector } from 'react-redux';
import { getLinks, removeLink } from '../store/linkSlice';

const Links = ({setLinkModal}) => {
    const link = useSelector(state => state.link)
    const dispatch  = useDispatch();
    const email = localStorage.getItem('email');
    const links = link.links;

    useEffect(() => {
     
        dispatch(getLinks(email))
       
    
     
    }, [link])
    
    
    return (
        <div className='p-5 rounded-xl bg-[#222430] '>
            <Button
                disabled={false}
                onClick={() => setLinkModal(true)}
                size="lg"
                color='info'
                sx={{ width: '100%', mb: 2, borderRadius: '50px', height: '30px' }}

            >
                Add Link
            </Button>

            {
          links?.length!==0 && links?.map((item) => (
            <LinkDiv title={item.title} link={item.link}/>
          ))

        }
           

        </div>

    )
}

export default Links
