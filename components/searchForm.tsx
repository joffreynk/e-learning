import Image from "next/image"
import { Input } from "@/components/ui/input"

const SearchForm = () => {
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
             />
        </label>

    </form>
  )
}

export default SearchForm