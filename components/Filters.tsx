'use client'

import { formQueryUrl } from "@/lib/formQueryUrl";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const links = ['all', 'frontend', 'backend', 'fullStack'];

const Filters = () => {
  const [active, setActive] = useState('')

  const roouter = useRouter()
  const searchParams = useSearchParams()

  const handleFilters = (link: string) =>{
    setActive(link)
    let newUrl = '';
    if(active === link){
      setActive('')
      newUrl = formQueryUrl({
        params: searchParams.toString(),
        key: 'category',
        value: null
      })
    }else {
      setActive(link);
      newUrl = formQueryUrl({
        params: searchParams.toString(),
        key: "category",
        value: link.toLocaleLowerCase(),
      });
    }
  }
  return (
    <ul className="text-white-800 body-text flex-wrap no-scrollbar flex w-full max-w-full gap-x-2  overflow-auto py-6 sm:max-w-2xl ">
      {links.map((link) => (
        <button
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          onClick={() => handleFilters(link)}
          key={link}
        >
          {" "}
          {link}{" "}
        </button>
      ))}
    </ul>
  );
}

export default Filters; 