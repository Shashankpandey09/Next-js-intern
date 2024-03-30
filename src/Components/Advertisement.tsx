interface props{
    title:string;
    imageUrl:string;
  
};


const Advertisement:React.FC<props> = ({imageUrl,title}) => {
  return (
    <div className="flex justify-between flex-col items-center h-full shadow-lg pt-2 px-2" >
    <div className="w-[217px] md:h-[97%] h-[99%] border border-[#006555]">
      <div className='image relative   '>
        <img src={imageUrl} alt="advertisement " className=" object-cover" />
        <button className="w-[47.78px] absolute top-0 right-0 bg-black text-white " >Ad</button>
      </div>
      <div className="mt-4  text-center">
        <p className="font-semibold text-[20px]">Advertisement title</p>
      <h2 className="text-[12.8px] text-justify line-height-2 px-3 py-1">{title}</h2>
    </div> 
    </div>
  </div>
  )
}
export default Advertisement