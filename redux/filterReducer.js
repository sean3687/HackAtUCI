const community = [
  {
    name:"Vista del Campo",
    short:"VDC",
    checked:true,
  },
  {
    name:"Vista del Campo Norte",
    short:"VDCN",
    checked:true,
  },
  {
    name:"Camino del Sol",
    short:"CDS",
    checked:true,
  },
  {
    name:"Puerta del Sol",
    short:"PDS",
    checked:true,
  },
  {
    name:"Plaza Verde",
    short:"PV",
    checked:true,
  },
  {
    name:"Plaza Verde II",
    short:"PVII",
    checked:true,
  },

]

const list = [
  
]


export default function filterReducer(
  prev = [
    {
      objJSON: list,
      community: community,
      bed:0,
      bath:1,
      priceMin:0,
      priceMax:100000000,
      availability:"",
    }
  ],
  action
  
){
  let newData = [...prev]
  switch(action.type){
    
    case "updatePriceMin":
      let newMin = action.payload
      newData[0].priceMin = newMin
      console.log(newData[0].priceMin)
      return newData

    case "updatePriceMax":
      let newMax = action.payload
      newData[0].priceMax = newMax
      console.log(newData[0].priceMax)
      return newData


    case "updateBeds":
      let newBeds = action.payload
      newData[0].bed = newBeds
      console.log(newData[0].bed)
      return newData
      
    case "updateBaths":
      let newBaths = action.payload
      newData[0].bath = newBaths
      console.log(newData[0].bath)
      return newData
      
    case "updateCommunityCheckbox":
      let newCommunity = action.payload
      newData[0].community = newCommunity
      console.log(newData)
      return newData

    case "updateListOfReviews":
      let newListOfReviews = action.payload;
      newData[0].objJSON = newListOfReviews;
      console.log("REDUXREDUXREDUXREDUXREDUXREDUX"+newListOfReviews)
      return newData;

    default:
      return prev
  }
}
  

