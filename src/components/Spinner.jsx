import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';


const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader 
    loading={loading} 
    size={150} 
    color='#4338ca'
    cssOverride={override}
    />
  )
}

export default Spinner