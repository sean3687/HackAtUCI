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

export default function filterReducer(
  prev = [
    {
      community: community,
      bed: 1,
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
    case "updateCommunityCheckbox":
      return newData
    default:
      return prev
  }
}
  

