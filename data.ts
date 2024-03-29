// data.ts

// Define an interface for the object structure
interface DataItem {
    id:number;
    TeamName: string;
    events: number;
    imageUrl: string;
    sports:string;
  }
  interface Advertisement{
    imageUrl:string;
    title:string;
  }
  
  // Define your array of objects
  const data: DataItem[] = [
    {    id:1, 
        TeamName: "Sacramento River Cats",
        events: 48,
      imageUrl: "/player1.png",
      sports:"baseball",
    },
    {
        id:2,
    TeamName: "Las Vegas Aviators",
    events: 28,
      imageUrl: "/player2.jpg",
      sports:"baseball",
    },
    {    id:3,
        TeamName: "new jersey devils",
        events:15,
          imageUrl: "/player3.png",
          sports:"ice hockey",
        },
        {  id:4,
            TeamName: "Las Vegas Aviators",
            events: 28,
              imageUrl: "/player2.jpg",
              sports:"baseball",
            },

  ];
  
  export const banner:Advertisement={
    imageUrl:"/banner.png",
    title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  export default data;
  