import Image from "next/image"
import Link from "next/link"
import profileImg from "@/../public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
            <Image src={profileImg} alt="Zain logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
        <span className="font-extrabold dark:font-bold text-lg md:text-3xl">Zain.</span>
    </Link>
  )
}

export default Logo