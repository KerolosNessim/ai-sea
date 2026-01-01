import Image from 'next/image'
import React from 'react'

const PartnerCard = ({img}: {img: string}) => {
  return (
    <div className='bg-background rounded-4xl w-[250px] h-[200px] flex items-center justify-center'>
      <Image src={img} alt="partner" width={300} height={250} className='w-[150px] object-contain' />
    </div>
  )
}

export default PartnerCard