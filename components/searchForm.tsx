'use client'

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { formQueryUrl } from "@/lib/formQueryUrl"
import { useRouter, useSearchParams } from "next/navigation"

const SearchForm = () => {
    const [search, setSearch] = useState('');
      const searchParams = useSearchParams();
      const router = useRouter();
  
  useEffect(() => {
    const delayBounceFn = setTimeout(() =>{
      let newUrl = '';
      if(search){
        newUrl = formQueryUrl({
          params: searchParams.toString(),
          key: 'query',
          value: search
        })
      }else {
        newUrl = formQueryUrl({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, {scroll: false});
    }, 300);
  
    return () => clearTimeout(delayBounceFn);
  }, [search]);
  
  
  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
        <label className="flex-center relative w-full max-w-3xl">
            <Image
            src='/magnifying-glass.svg'
            alt="search icon"
            width={32}
            height={32}
            className="absolute left-8 cursor-pointer"
            />
            <Input
            className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
            placeholder="Search"
            onChange={(event: any) =>setSearch(event.target.value)}
            value={search}
             />
        </label>

    </form>
  )
}

export default SearchForm