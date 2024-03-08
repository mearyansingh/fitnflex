import React from 'react'
import { Stack } from 'react-bootstrap'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
   return (
      <>
         <Stack direction="horizontal" className='justify-content-center w-100'>
            <Triangle
               visible={true}
               height="80"
               width="80"
               color="#000"
               ariaLabel="triangle-loading"
            />
         </Stack>
      </>
   )
}

export default Loader