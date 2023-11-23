import SortableTable from "../components/SortableTable";

function TablePage(){
    const data = [
        {name:'Orange',color:'orange',score:5},
        {name:'Banana',color:'yellow',score:2},
        {name:'Grapes',color:'green',score:4},
        {name:'Apples',color:'red',score:1},
    ];

    const config = [
        {label:'Fruit',render: (fruit)=>fruit.name,sortValue : (fruit) => fruit.name },
        {label:'Color',render: (fruit)=>{return (<div style={{height:'10px',width:'10px',backgroundColor:`${fruit.color}`,border:'1px solid black'}}></div>)}},
        {label:'Score',render: (fruit)=>fruit.score,sortValue : (fruit) => fruit.score}
    ]
    return(
        <SortableTable data={data} config={config}/>
    );
}

export default TablePage;
