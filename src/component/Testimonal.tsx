import Image from "next/image";
import { FC } from "react";
import account from '@/assets/images/Account.png'
import Button from "./Button";
import star from '@/assets/images/star.svg'
// import 

const Testimonal: FC<{
  data?: any;
}> = ({ data }) => {
  return (
    <div className="rounded-lg my-10 border-[1px] p-[24px] w-[364px]">
        <h1 className="text-2xl font-medium mb-4">Testimoni</h1>
        {[1,2,3].map((item, index) => 
        <div key={index} className="flex gap-1 mb-4">
            <Image src={account} alt="" className="scale-75 translate-y-[-10px]" width={100}/>
            <div>
                <div className="flex gap-2">
                  <h1 className="text-medium">Budi Setiadi</h1>
                  <h1 className="text-secondary">|</h1>
                  <div className="flex gap-1">
                    <Image src={star} alt="star"/>
                    <h1>4.5</h1>
                  </div>
                </div>
                <h1 className="text-xs text-grey2">Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun</h1>
            </div>
        </div>
          )}

        
    </div>
  );
};

export default Testimonal;
