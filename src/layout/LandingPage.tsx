import Footer from "@/component/Footer"
import Header from "@/component/Header"
import { FC, ReactNode } from "react"

const LandingPage: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
    <Header/>
    <div className="h-[124px]"></div>
    {children}
    <Footer/>
    </div>
  )
}

export default LandingPage