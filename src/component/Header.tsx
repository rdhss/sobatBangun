import { FC } from "react"
import Logo from '@/assets/images/Logo.svg'
import Image from "next/image"
import DropDown from "./DropDown"
import Button from "./Button"
import bars from '@/assets/images/bars.png'


const Header: FC<{
   button? : boolean
  }> = ({ button }) => {
    


    return (
      <div className="w-min-[1438px] h-[123px] z-50 fixed bg-white w-full flex justify-between items-center p-primary">
        <div>
        <Image src={Logo} alt="logo"/>
        </div>
        <div className="gap-4 hidden md:flex">
          <DropDown title="Tentang Kami"/>
          <DropDown title="Produk & Layanan"/>
          <h1 className="font-medium cursor-pointer">Blog</h1>
          <h1 className="font-medium cursor-pointer">FAQ</h1>
        </div>
        <div className="hidden md:flex gap-3">
          <Button title="Daftar"/>
          <Button title="Masuk" bgRed textWhite/>
        </div>
        <div className="md:hidden">
          <Image width={30} src={bars} alt="bars"/>
        </div>
      </div>
    )
  }

export default Header