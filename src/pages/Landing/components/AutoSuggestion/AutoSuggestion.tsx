import React from "react";
import Styles from "./AutoSuggestion.module.scss";


export type ListViewProps = {
    filtered: ListItemType[];
}

export type ListItemType = {
        author: string;
        country: string;
        imageLink: string;
        language: string;
        link: string;
        pages: number;
        title: string;
        year: number;
}
const AutoSuggestion: React.FC<ListViewProps>= ({filtered}) => {
    
    return<>
        <div className={Styles.dataResult}>
            {filtered.slice(0,8).map((value,index)=>{
                return (<a className={Styles.dataItem} href={value.link} key={index}>
                    <p>{value.title}</p>
                    </a>)
                    })}
        </div>
    </>
}

export default AutoSuggestion;
