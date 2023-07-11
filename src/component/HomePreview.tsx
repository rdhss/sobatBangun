import { FC } from "react";
import CardPrevivew from "./CardPreview";
import bedroom from "@/assets/images/bedroom.png";
import kitchen from "@/assets/images/kitchen.png";
import living from "@/assets/images/living-room.png";

const listData = [
  {
    title: "Ruang Keluarga",
    img: living,
    size: "2.0 x 2.9",
  },
  {
    title: "Kamar Tidur",
    img: bedroom,
    size: "4.0 x 3.4",
  },
  {
    title: "Ruang Makan & Dapur",
    img: bedroom,
    size: "3.0 x 2.9",
  },
  {
    title: "Ruang Kerja",
    img: living,
    size: "2.0 x 2.9",
  },
  {
    title: "Kamar Tidur",
    img: bedroom,
    size: "4.0 x 3.4",
  },
];

const HomePreview: FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div className="py-10">
      <h1 className="text-xl mb-6 font-medium md:text-left text-center">Tampilan Rumah</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {listData.map((item, index) => (
            <div key={index}>
                <CardPrevivew title={item.title} img={item.img} size={item.size} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default HomePreview;
