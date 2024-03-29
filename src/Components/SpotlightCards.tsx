import DottedLines from "./DottedLines";
interface Props{
    imageUrl:string;
    teamName:string;
    collectionType:string;
    location:string;
    isLightTheme:boolean;
}
const SpotlightCards:React.FC<Props> = ({imageUrl,teamName,collectionType,location,isLightTheme}) => {
  return (
   <div className={`h-[624px]  w-[257px] ${isLightTheme?"bg-[#ffff] text-white":"bg-[#3B3E47]"} `}>
  <div className="image   ">
  <img src={imageUrl} alt={teamName} className="object-contain w-full pb-0 h-full " />
   
  </div>
  <div className="translate-y-[-12px] relative">
    <div className={`w-[20px] h-[20px] ${isLightTheme?"bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]":"bg-gradient-to-r from-[#18282A] to-[#221A2C]"}  absolute translate-x-[-12px] top-[-8px]  rounded-full`}></div>
    <div className={`w-[20px] h-[20px] ${isLightTheme?"bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]":"bg-gradient-to-r from-[#18282A] to-[#221A2C]"}  absolute translate-x-[12px] right-0 top-[-8px] rounded-full`}></div>
  <DottedLines/>
  </div>
    <div className={`${isLightTheme?"text-black":"text-white"}`}>
  <h1 className="font-semibold text-xl  line-height-[20px] my-3">
  {teamName}
</h1>
<p><span>Oct 15 |Sun| 4:30 PM</span></p>
<div className="w-[80%] m-auto opacity-60 my-3 ">
  <p>{location}</p> 
</div>

  <button className="bg-black text-white py-2 w-[229px] px-4">{collectionType}</button>
</div>
   </div>
  )
}
export default SpotlightCards