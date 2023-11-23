import { Fragment } from "react";

function Table({data,config}){
    
    const headers = config.map(row=>{
        if(row.header){
            return(
                <Fragment key={row.label}>{row.header()}</Fragment>
                    
            )
        }
        return (
            <Fragment key={row.label}><th>{row.label}</th></Fragment>    
        );
    });
    const renderedRows = data.map((row,i)=>{
        return (
            <tr key={i}>
                {
                    config.map((item,j)=>{
                        return (
                            <td key={j}>
                                {item.render(row)}
                            </td>
                        )    
                    })
                }
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;
