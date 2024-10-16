import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

const SosmedCard = () => {
  return (
    <div className='flex flex-wrap gap-5'>
      <FaLinkedin className='card-sosmed'/>
      <FaInstagram className='card-sosmed'/>
      <FaGithub className='card-sosmed'/>
      <FaTiktok className='card-sosmed'/>
      <MdOutlineMail className='card-sosmed'/>
    </div>
  )
}

export default SosmedCard
