import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 ">
      <div className="flex-between w-full px-6 xs:px-8 sm:px-16 ">
        <Link href="/">
          <Image src="/jsm-logo.svg" width={55} height={40} alt="logo" />
        </Link>

        <Image
        src='/hamburger-menu.svg'
        width={30}
        height={30}
        alt="hamburger"
        className="block md:hidden"
        />
        <ul className="">

        </ul>
      </div>
    </nav>
  );
}

export default NavBar