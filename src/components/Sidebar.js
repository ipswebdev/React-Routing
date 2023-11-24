import Link from "./Link";

function Sidebar(){
    const links = [
        {
            label:'Dropdown',
            path:'/',
        },
        {
            label:'Accordion',
            path:'/accordion',
        },
        {
            label:'Button',
            path:'/button',
        },
        {
            label:'Modal',
            path:'/modal',
        },
        {
            label:'Table',
            path:'/table',
        }
        ,
        {
            label:'Counter',
            path:'/counter',
        }
    ]
    return (
        <div>
            {links.map(
                (link)=>{
                    return(
                        <div key={link.label}>
                            <Link toUrl={link.path}>{link.label}</Link>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Sidebar;