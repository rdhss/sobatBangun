import { FC } from "react"
import Logo from '@/assets/images/Logo-white.svg'
import Image from "next/image"
import email from '@/assets/images/MessageIcon.svg'
import social from '@/assets/images/social.png'
import kredit from '@/assets/images/kredit.png'
import kreditRumah from '@/assets/images/kredit-bangun-rumah.png'
import tunai from '@/assets/images/tunai.png'
import rekan from '@/assets/images/rekan-tecnology.png'
import sig from '@/assets/images/sig.png'



const Footer: FC<{
   button? : boolean
  }> = ({ button }) => {
    


    return (
      <div className=" bg-dark md:h-[583px] w-full p-wide  ">

        <div className="flex gap-36">
          <div className="flex flex-col gap-4">
          <Image src={Logo} alt="logo"/>
          <h1 className="text-white md:w-[700px]">SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan.</h1>
          <div className="flex gap-3">
            <Image src={email} alt="email"/>
            <h1 className="underline text-white">sobat@sobatbangum.com</h1>
          </div>
          <div className="mt-7">
            <h1 className="text-white">Sosial Media :</h1>
            <div className="flex translate-x-[-21px]">
            <Image src={social} alt="social"/>
            </div>
          </div>
          </div>

          <div className="md:flex hidden flex-col gap-8 text-white">
          <h1 className="text-xl font-medium">Produk & Layanan</h1>
          <div className="flex flex-col gap-6">
            <h1>Renovasi</h1>
            <h1>Bangun Rumah</h1>
            <h1>Layanan Desain</h1>
            <h1>Teknologi Tambahan</h1>
            <h1>Beli Material</h1>
          </div>
          </div>

          <div className="md:flex hidden flex-col gap-8 text-white">
          <h1 className="text-xl font-medium">Tentang Kami</h1>
          <div className=" flex flex-col gap-6">
            <h1>Tentang SobatBangun</h1>
            <h1>Kebijakan Dan Privasi</h1>
            <h1>Syarat Dan Ketentuan</h1>
            <h1>FAQ</h1>
            <h1>Daftar Menjadi Mitra</h1>
          </div>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-4 w-full justify-between text-white">
        <div>
          <h1 >Kredit Bangun Rumah</h1>
          <Image src={kreditRumah} alt="payment"/>
        </div>
        <div>
          <h1>Tunai Via Bank Transfer</h1>
          <Image src={tunai} alt="payment"/>
        </div>
        <div>
          <h1>Kartu Kredit</h1>
          <Image src={kredit} alt="payment"/>

        </div>
        <div>
          <h1>Rekan Teknologi Tambahan</h1>
          <Image src={rekan} alt="payment"/>

        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between mt-10">
        <div className="flex items-center gap-4 text-white">
          <h1 className="mt-3">Powered by :</h1>
          <Image src={sig} alt="sig"/>
        </div>
        <h1 className="mt-3 text-white">Copyright © 2023 SobatBangun. All rights reserved.</h1>
      </div>

      </div>
    )
  }

export default Footer