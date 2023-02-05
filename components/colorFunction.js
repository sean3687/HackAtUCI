let map = new Map()
let color = ["#5F668C","#7A6886","#FF6F69","#FFCC5C","#8FD3B2","#5fa182"]
map.set('Vista del Campo',["VDCN",color[0]])
map.set('Vista del Campo Norte',["VDCN",color[1]])
map.set('Puerta del Sol',["PDS",color[2]])
map.set('Camino del Sol',["CDS",color[3]])
map.set('Plaza Verde I',["PVI",color[4]])
map.set('Plaza Verde II',["PVII",color[5]])



function community_addon(community_name){
    return map.get(community_name)
}