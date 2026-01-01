import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

const TeamCard = ({profile}: {profile: string}) => {
  return (
    <div className="bg-[#F6F7F9] xl:p-14 md:p-10 p-8 rounded-4xl flex flex-col items-center gap-4 text-center">
      <Image src="/team.png" alt="team" width={100} height={100} className='size-20' />
      <Image src="/crown.svg" alt="crown" width={20} height={20} className='size-4' />
      <div className="flex flex-col items-center ">
        <h3 className='font-bold '>Karim Bouziane</h3>
        <p>— AI Engineer</p>
      </div>
      <Button className="bg-white text-gris rounded-full font-semibold text-sm hover:text-white">
        <Eye />
        <span>{profile}</span>
      </Button>
    </div>
  );
}

export default TeamCard