
import Image from "next/image"
import { FC } from "react"



const CardPreview: FC<{
   title? : string,
   img : any,
   size : string
  }> = ({ title, img, size }) => {
    
    return (
      <div className="rounded-lg border-[1px] p-[16px] w-[293px]">
            <Image src={img} alt="img" className="rounded-sm"/>
            <div className="mt-7">
            <p className="font-medium">{title}</p>
            <p>{size}</p>
            </div>
      </div>
    )
  }

export default CardPreview