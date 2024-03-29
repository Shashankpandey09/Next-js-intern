interface Cards{
    imageUrl:string;
    teamName:string;
    collectionType:string;
    location:string;
    id:number;
}

const spotLight:Cards[]=[
    {
        id:1,
        teamName:"Las Vegas Aviators",
        collectionType:"Take Flight Collection",
        imageUrl:"/Card1.png",
        location:"Las Vegas Ballpark, Las Vegas, Nevada"
    },
    
    {
        id:2,
        teamName:"Sacramento River Cats",
        collectionType:"Orange Collection",
        imageUrl:"/Card2.png",
        location:"Sutter Health Park, Sacramento, California"
    },
    {
        id:3,
        teamName:"Las Vegas Aviators",
        collectionType:"Take Flight Collection",
        imageUrl:"/Card1.png",
        location:"Las Vegas Ballpark, Las Vegas, Nevada"
    },
];
export default spotLight;