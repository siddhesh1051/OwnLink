import React from 'react'
import Button from '@mui/joy/Button';

import LinkDiv from './LinkDiv'

const Links = ({setLinkModal}) => {
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

            <LinkDiv />
            <LinkDiv />
            <LinkDiv />
            <LinkDiv />
            <LinkDiv />
            <LinkDiv />
            <LinkDiv />
            <LinkDiv />

        </div>

    )
}

export default Links
