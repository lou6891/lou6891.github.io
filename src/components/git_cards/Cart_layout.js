import React from 'react';
import {languageSymbols} from "../languageSymbols";
import classes from "./card.module.css"

export default function Cart_layout({rep, index}) {

    // https://api.github.com/repos/OWNER/REPO/languages

    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <button
            className={classes.card_sections}
            onClick={()=>{window.open(rep["html_url"], '_blank', 'noreferrer')}}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            key={index}
        >

            {
                !isHovered
                ?
                    <div >
                        <img src={rep["Social_Preview"]} alt={rep["name"] + " image"} className={classes.card_sections_image}/>
                        <h3 style={{color: "var(--primaryColor)", margin : "2% 0 3% 0", textAlign : "left"}}>
                            {rep["name"]}
                        </h3>
                        <hr className={classes.card_sections_hr}/>
                        <h4>
                            {rep["description"] ? rep["description"] : "No Description Available"}
                        </h4>
                        <p style={{color : "var(--terziaryColor"}}>
                            Created on {rep["created_at"].toString().slice(0,10)}
                        </p>
                        <div className={classes.icon_div}>
                            {rep["languages"]
                                ?
                                Object.keys(rep["languages"]).map((language, index)=>{
                                    return(
                                        <span key={index}>
                                            {languageSymbols[language]}
                                        </span>
                                    )

                                })
                                : ""
                            }
                        </div>
                    </div>

                    :

                    <div className={classes.hover_arrow}>
                        <h3 style={{color: "var(--primaryColor)", margin : "0", transform : "translate(0px , 10px)"}}>
                            {rep["name"]}
                        </h3>
                        &#8611;
                    </div>

            }






        </button>


);
}