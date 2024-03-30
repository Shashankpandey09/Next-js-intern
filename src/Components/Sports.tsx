
import PlayersCard from "./PlayersCard";
import data,{ banner } from "../../data";
import Advertisement from "./Advertisement";
 
interface Props{
  isLightTheme:boolean;
}
const Sports: React.FC<Props> = ({isLightTheme}) => {
  
  return (
    <div className={`${isLightTheme?"text-black":"text-white "} md:min-h-[673px] w-[90vw] mb-10 `}>
      <div className="border-b-2 ml-6  md:ml-20 mb-4 border-[#738FFF] w-fit">
        <h1 className="text-2xl  font-semibold pt-9">Sports</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3  p-4">
        {data.map((item, index) => (
          <div className={`${isLightTheme?"bg-white":"bg-[#3B3E47] "}`}  key={index}>
          <PlayersCard isLightTheme={  isLightTheme}  {...item} />
          </div>
        ))}
        <div className={`${isLightTheme?"bg-white":"bg-[#3B3E47] "}`}>
        <Advertisement {...banner}/>
        </div>
       
      </div>
      <div className=" flex justify-center items-center pt-10">
      <button className="bg-[#2C9CF0] px-8 rounded-md py-2 text-white  ">
        See More
      </button>
      </div>
     
    </div>
  );
};

export default Sports;
