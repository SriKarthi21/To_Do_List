
export default function filterData(item,searchText){
    if(!searchText)return item;
return item.filter((data)=>data.title.toLowerCase().includes(searchText.toLowerCase()))
}