import { FC } from "react";
import CardPrevivew from "./CardPreview";
import bedroom from "@/assets/images/bedroom.png";
import kitchen from "@/assets/images/kitchen.png";
import living from "@/assets/images/living-room.png";
import AnotherItemCard from "./AnotherItemCard";



const AnotherItemPreview: FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div className="py-10 p-side">
      <h1 className="text-xl mb-6 font-medium">Desain Lainnya oleh Studio SAe</h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {[1,2,3,4].map((item, index) => (
          <div key={index}>
            <AnotherItemCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnotherItemPreview;
