'use client'

import { useState } from "react";

const links = ['all', 'frontend', 'backend', 'fullStack'];

const Filters = () => {
  const [active, setActive] = useState('')
  const handleFilters = (link: string) =>{
    setActive(link)
  }
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-3 overflow-auto py-12 sm:max-w-2xl">
      {
        links.map((link) =>(<button className={`${active === link? 'gradient_blue-purple': ''} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`} onClick={()=>handleFilters(link)} key={link} > {link}  </button>))
      }
    </ul>
  )
}

export default Filters; 