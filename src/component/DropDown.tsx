import Image from "next/image"
import { FC, useState } from "react"
import dropdown from '@/assets/images/arrow-down.svg'
import dropdownRed from '@/assets/images/arrow-down-red.svg'

const DropDown: FC<{
   title : string
  }> = ({ title }) => {
    const [hover, setHover] = useState(false)

    return (
      <div className="flex gap-2 hover:text-red-500" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <h1 className="font-medium cursor-pointer">{title}</h1>
        <Image className="mt-1" src={hover ? dropdownRed : dropdown} alt="drop"/>
      </div>
    )
  }

export default DropDown