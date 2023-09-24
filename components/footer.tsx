import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 px-20 py-1 max-md:flex-col'>
      <p>Joffreynk e-learning &copy;2023, all right reserved</p>
      <div className='flex gap-x-9'>
        <Link href="/terms-snd-conditions">Terms and Conditions</Link>
        <Link href="/privacy-snd-policies">privacy and Policies</Link>
      </div>
    </footer>
  );
}

export default Footer