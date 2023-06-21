import React, { useEffect } from 'react'
import Button from '@mui/joy/Button';

import LinkDiv from './LinkDiv'
import { useDispatch, useSelector } from 'react-redux';
import { getLinks, removeLink } from '../store/linkSlice';

const Links = ({setLinkModal,settitle,setUrlLink,setLinkImage,linkImage}) => {
    const link = useSelector(state => state.link)
    const dispatch  = useDispatch();
    const email = localStorage.getItem('email');
    const links = link?.links;

    useEffect(() => {
     
        dispatch(getLinks(email))
       
    
     
    }, [])
    
    
    return (
        <div className='p-5 rounded-xl bg-[#222430] '>
            <Button
                disabled={false}
                onClick={() => { setUrlLink("")
                settitle("")
                setLinkImage("");
                setLinkModal(true)}}
                size="lg"
                color='info'
                sx={{ width: '100%', transitionDuration:'300ms', mb: 2, borderRadius: '50px', height: '30px',":active":{scale:'0.95'} }}

            >
                Add Link
            </Button>

            {
          links?.length!==0 && links?.map((item) => (
            <LinkDiv title={item.title} link={item.link} linkImage={item.linkImage} setLinkModal={setLinkModal} settitle={settitle} setUrlLink={setUrlLink} setLinkImage={setLinkImage} />
          ))

        }
           

        </div>

    )
}

export default Links
