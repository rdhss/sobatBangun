import { FC } from "react"

const Button: FC<{
   onclick? : any
   title : string
   bgRed? : boolean
   textWhite? : boolean
   full? : boolean
   borderType? : boolean
  }> = ({ onclick, title, bgRed, textWhite, full, borderType }) => {
    return (
      <button
       className={`py-[10px] px-[16px] ${borderType && '!bg-white border-2 border-primary'} ${borderType && '!text-primary'} ${bgRed && 'bg-primary'} ${textWhite && 'text-white'} rounded-[6px] ${full && 'w-full'}`}
      >
        {title}
      </button>
    )
  }

export default Button