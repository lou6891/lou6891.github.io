import React from "react"
import {personal_data} from "../../../parameters/data";
import classes from "../Body.module.css"
import {languageSymbols} from "../../../parameters/languageSymbols";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const iconSize = "100px"

// https://stephane-monnot.github.io/react-vertical-timeline/#/

export default function About({theme}){


    // Since I cannot use css varibale in the vertical timeline (IK)
    // I need tog et the primary color from the div, convert  it into a variable and then pass it to it
    // THe issue is making so that the user can change theme

    const ref = React.useRef()
    const [primaryColor, setPrimaryColor] = React.useState(theme === "dark" ? "#ffffff" : "#525252")

    React.useEffect(()=>{
        setPrimaryColor(getComputedStyle(ref.current).getPropertyValue('--secondaryColor'))
    }, [theme, ref])

    const VerticalTimelineHeaderModified = ({index, ProfExp, title_field_name, subtitle__field_name, list_field_name}) => {
        return(
            <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentArrowStyle={{ borderRight: '8px solid  var(--innerBackgroundColor)' , top : "25px"}}
                contentStyle={{ background: "var(--contentBackgroundColor)",  top : "-17px", boxShadow : "2px 2px 2px 2px var(--innerBackgroundColor)" , marginLeft : "52px", width : "var(--verticalTimelineContentWidth)", padding : "10px 10px 10px 16px"} }
                iconStyle={{ background : "var(--secondaryColor)", width : "var(--timelineDotSize)" , height : "var(--timelineDotSize)", marginLeft : "var(--timelineDotMarginLeft)"}}
                style={{marginBottom : "7%", marginTop : "7%"}}
                dateClassName={classes.date}
                date={ProfExp["date_start"] +" - "+ ProfExp["date_end"]}
            >
                <h4>{ProfExp[title_field_name]}</h4>
                <h6>{ProfExp[subtitle__field_name]}</h6>
                <ul className={classes.about_main}>
                    {ProfExp[list_field_name].map((value, index)=>{
                        return(
                            <li key={index} className={classes.about_main}>
                                {value}
                            </li>
                        )
                    })}
                </ul>
            </VerticalTimelineElement>
        )
    }



    return (
        <main className={classes.about_main} ref={ref}>

            { personal_data["About_Page"]["Professional_summary"]
                ?
                    <section id={"Professional_summary"}>

                        <h3>
                            Professional Summary
                        </h3>

                        <hr/>

                        <h5 style={{textAlign : "left", margin : "0"}}>
                        {personal_data["About_Page"]["Professional_summary"]
                            .split('\n')
                            .map((line, index) => (
                                <React.Fragment key={index}>
                                    <p key={index} style={{ marginBottom: "7px", lineHeight: "1.3", fontSize: "clamp(calc(var(--pFontSizeMobile) + 1px) ,  2vw,calc(var(--pFontSizeDesktop) + 2px))" }}>
                                    {line}
                                    </p>
                                </React.Fragment>
                            ))}
                        </h5>

                    </section>
                : "" }

            {
                personal_data["About_Page"]["Professional_experiences"]
                ?
                    <section id={"Professional_Experience"}>
                        <h3>
                            Professional Experience
                        </h3>

                        <hr/>

                        <VerticalTimeline
                            lineColor={primaryColor}
                            className={classes.vertical_timeline}
                            layout={"1-column"}
                        >
                        {
                            personal_data["About_Page"]["Professional_experiences"].map((ProfExp, index)=>{
                                let title_field_name = "company_name"
                                let subtitle__field_name = "position_name"
                                let list_field_name = "position_information"
                                return(<VerticalTimelineHeaderModified
                                    key={index}
                                    index={index}
                                    ProfExp={ProfExp}
                                    title_field_name={title_field_name}
                                    subtitle__field_name={subtitle__field_name}
                                    list_field_name={list_field_name}
                                />)
                            })
                        }
                    </VerticalTimeline>
                    </section>
                : "" }

            {
                personal_data["About_Page"]["Education"]
                ?
                    <section id={"Education"}>
                        <h3>
                            Education
                        </h3>

                        <hr/>

                        <VerticalTimeline
                            lineColor={primaryColor}
                            className={classes.vertical_timeline}
                            layout={"1-column"}
                        >
                            {
                                personal_data["About_Page"]["Education"].map((eduExp, index)=>{
                                    let title_field_name = "school_name"
                                    let subtitle__field_name = "program"
                                    let list_field_name = "information"

                                    return(<VerticalTimelineHeaderModified
                                        key={index}
                                        index={index}
                                        ProfExp={eduExp}
                                        title_field_name={title_field_name}
                                        subtitle__field_name={subtitle__field_name}
                                        list_field_name={list_field_name}
                                    />)
                                })
                            }

                        </VerticalTimeline>




                    </section>
                : "" }


            {
                personal_data["About_Page"]["IT_skills"]
                ?
                    <section id={"IT_skills"}>
                        <h3>
                            IT Skills
                        </h3>
                        <hr/>


                        <div className={classes.it_skills_section}>

                        {
                            personal_data["About_Page"]["IT_skills"].map((skill, index)=>{

                                if(languageSymbols[skill] !== undefined){
                                    return(
                                        <abbr
                                            data-title={skill}
                                            style={{height : iconSize, width : iconSize, }}
                                            key={index}
                                        >{languageSymbols[skill]}</abbr>

                                    )
                                }
                                else{
                                    return(
                                        <span style={{height : iconSize}} key={index}>
                                            {languageSymbols["undefined"]}
                                        </span>
                                    )
                                }

                        })}
                        </div>
                    </section>
                : ""}

            {
                personal_data["About_Page"]["Languages"]
                ?
                    <section className={classes.language_skills_section}
                    >

                        <h3>
                            Languages
                        </h3>
                        <hr/>

                        <div className={classes.language_skills_section_container}>

                        {
                            personal_data["About_Page"]["Languages"].map((language,index)=>{
                                const length = language[1] === 0 ? 0 : 20*language[1]

                                return(
                                    <div className={classes.language_skills_grid }
                                         style={{marginTop : index !== 0 ? "15px" : 0, }}
                                         key={index}
                                    >
                                        <h4 style={{maxWidth : "100px"}}>
                                        {language[0]}
                                       </h4>

                                        <div className={classes.language_skills_line_div } >

                                           <p style={{width : length.toString() + "%",}}>{language[2]}</p>
                                           <hr style={{ width : length.toString() + "%", }}/>

                                       </div>

                                   </div>
                                )
                            })
                        }
                        </div>

                    </section>

                : ""
            }

            {/*

            <section id={"Extracurricular_info"}>

            </section>

            */}

        </main>
    )
}