import Image from "next/image";
import { FC } from "react";
import logoSae from "@/assets/images/studioSae.svg";
import verify from "@/assets/images/verify.svg";
import homeIcon from '@/assets/images/home-price.svg'
import bedIcon from '@/assets/images/home-bed.svg'
import floorIcon from '@/assets/images/floor-home.svg'
import arrowIcon from '@/assets/images/arrow-price.svg'
import Button from "./Button";

const CardPrice: FC<{
  data?: any;
}> = ({ data }) => {
  return (
    <div className="rounded-lg my-10 border-[1px] p-[24px] w-[364px]">
      <h1 className="font-medium text-2xl">Omah Apik 3</h1>
      <div className="flex mt-4 items-center gap-3">
        <Image src={logoSae} alt="logo" />
        <h1>Studio SAe</h1>
      </div>

      <div className="desc">
        <div className="flex gap-5 mt-5">
          <h1 className="text-secondary">Jenis Rumah</h1>
          <h1>Scandinavian</h1>
        </div>
        <div className="flex gap-5 mt-2">
          <h1 className="text-secondary">Tipe Desain</h1>
          <div className="flex gap-1">
            <Image src={verify} alt="verify" className="ml-1"/>
            <h1 className="text-primary">Dapat Dimodifikasi</h1>
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <div className="flex justify-between">
        <div className="flex flex-col gap-1 justify-center items-center">
            <Image src={arrowIcon} alt="verify"/>
            <h1 className="text-secondary text-xs">Dimensi Tanah</h1>
            <h1 className="text-sm">15 x 8m</h1>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
            <Image src={homeIcon} alt="verify"/>
            <h1 className="text-secondary text-xs">Luas Bangunan</h1>
            <h1 className="text-sm">112m2</h1>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
            <Image src={floorIcon} alt="verify"/>
            <h1 className="text-secondary text-xs">Lantai</h1>
            <h1 className="text-sm">2</h1>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
            <Image src={bedIcon} alt="verify"/>
            <h1 className="text-secondary text-xs">Kamar Tidur</h1>
            <h1 className="text-sm">4</h1>
        </div>
      </div>

      <hr className="my-5" />
        <div className="flex flex-col gap-2">
            <p className="text-sm">Harga Desain</p>
            <h1 className="text-3xl font-medium">Rp. 32.500.000</h1>
            <h1 className="text-secondary text-sm">Harga konstruksi mulai dari Rp 560.000.000</h1>
            <Button full title="Konsultasi Sekarang" bgRed textWhite/>
        </div>
    </div>
  );
};

export default CardPrice;
