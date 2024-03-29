import React from 'react';

interface Props {
  id: number;
  TeamName: string;
  events: number;
  imageUrl: string;
  sports: string;
  isLightTheme:boolean;
}

const PlayersCard: React.FC<Props> = ({ id, TeamName, events, imageUrl, sports,isLightTheme }) => {
  return (
    <div className={`flex justify-center md:w-auto items-center   pt-2 shadow-lg px-2 `} key={id}>
      <div>
        {/* Card content */}
        <div className='image flex items-center flex-col'>
          <img src={imageUrl} alt={TeamName} className="w-full h-[385px] object-cover" />
          <h2 className="text-lg self-start capitalize font-semibold py-1">{TeamName}</h2>
        </div>
        <div className={`self-start ${isLightTheme?"bg-[#F7F7F8]":"bg-[#292B32]"} pt-1 mb-2 h-[54px] rounded-md flex justify-around`}>
        
          <div>
          <p className="text-sm opacity-60">Total Events</p>
          <p> {events} Events</p>
          </div>
          <div>
          <p className="text-sm opacity-60">Sports </p>
          <p>{sports}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersCard;
