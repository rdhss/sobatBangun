import { FC } from "react"
import arrowRight from '@/assets/images/arrow-right.svg'
import Image from "next/image"



const PathBars: FC<{
   path? : Array<string>
  }> = ({ path }) => {
    
    return (
      <div className="flex gap-4 py-4 pl-5 w-96 md:w-full md:p-primary">
        {path?.map((item, index) => 
            <>
              <h1 className={`${path.length - 1 === index ? 'text-secondary' : 'text-primary'}`}>{item}</h1>
              {path.length - 1 === index ? null : <Image src={arrowRight} alt="arrow"/>}
            </>
          )}
      </div>
    )
  }

export default PathBars