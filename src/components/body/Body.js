import classes from "./Body.module.css"
import React from "react";
import Portfolio from "./pages/Portofolio";
import About from "./pages/About";
import ThemeToggler from "../theme_toggler/ThemeToggler";
import { personal_data } from "../../parameters/data";
import sha1 from 'crypto-js/sha1';
import { sorting_functions, rearrange_repo_order } from "./sorting_functions";
import { settings } from "../../parameters/settings";

export default function Body({ deviceType, theme, setTheme }) {
    const headerStyles = () => {
        if (deviceType === "Desktop") { return {height:"0.7%", padding : "0 3%" } }
        else { return { height: "0" } }
    }

    const [activePage, setActivePage] = React.useState(settings.LandingPage);
    const [repositoryData, setRepositoryData] = React.useState(false);

    React.useEffect(() => {
        const repos_url = "https://api.github.com/users/" + personal_data.GitHub_name + "/repos";
        const cacheKey = "github_repos_data";

        const getData = async () => {
            try {
                // Check if data is in localStorage
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    setRepositoryData(JSON.parse(cachedData));
                    return;
                }

                // Get the repos' data from GitHub
                const response_repos = await fetch(repos_url);
                const data_repos = await response_repos.json();

                // Filter the repos, remove the ones the user doesn't want to show
                const filteredData = data_repos.filter((repo) => settings.Portfolio_settings.gitHub_repos_not_to_include.includes(repo["name"]) === false);

                // Sort the data repos to match the sorting selected by the user
                const sortedData = await sorting_functions(filteredData);

                // Sort data to show first the repos selected by the user
                let rearrangedData = rearrange_repo_order(sortedData);

                // Slice the data to match the user parameters
                if (settings.Portfolio_settings.GitHub_repos_to_show.toString().toLocaleLowerCase() !== "all") {
                    rearrangedData = rearrangedData.slice(0, settings.Portfolio_settings.GitHub_repos_to_show);
                }

                // Add the public image of the repository and call for the languages used in the repo
                const date = new Date();
                const hash = sha1(date.toString()).toString();
                rearrangedData.map(async (rep) => {
                    rep["Social_Preview"] = "https://opengraph.githubassets.com/" + hash + "/" + rep["full_name"];

                    // Preload the image
                    const img = new Image();
                    img.src = rep["Social_Preview"];

                    const language_url = "https://api.github.com/repos/" + personal_data.GitHub_name + "/" + rep["name"] + "/languages";
                    const response_lang = await fetch(language_url);
                    const language_data = await response_lang.json();

                    // Remove SCSS and add the thing to css, check if present, if it is, sum it with the css, and then remove it
                    const keys = Object.keys(language_data);
                    if (keys.includes("SCSS")) {
                        language_data["CSS"] = language_data["CSS"] + language_data["SCSS"];
                        delete language_data["SCSS"];
                    }
                    rep["languages"] = language_data;
                });

                // Store the data in localStorage
                localStorage.setItem(cacheKey, JSON.stringify(rearrangedData));
                setRepositoryData(rearrangedData);
            } catch (e) {
                console.log(e);
            }
        };

        getData();
    }, []);

    return (
        <section className={classes.body}>
            <header style={headerStyles()}>
                <div className={classes.body_header_container}>
                    <ul 
                    className={classes.body_header_ul}
                    // style={{ marginBottom: deviceType === "Desktop" ? "" : "5px" }}
                    >
                        <li className={classes.header_options}
                            onClick={() => { setActivePage("About") }}
                            style={{ color: activePage === "About" ? "var(--primaryColor)" : "", padding: deviceType === "Desktop" ? "15px 13px" : "13px 10px 15px 10px" }}>
                            About Me
                        </li>
                        <li className={classes.header_options}
                            onClick={() => { setActivePage("Portfolio") }}
                            style={{ color: activePage === "Portfolio" ? "var(--primaryColor)" : "", padding: deviceType === "Desktop" ? "15px 13px" : "13px 10px 15px 10px" }}>
                            Portfolio
                        </li>
                        <ThemeToggler theme={theme} setTheme={setTheme} />
                    </ul>
                </div>
                <br />
            </header>
            {activePage === "Portfolio" ? <Portfolio repositoryData={repositoryData} deviceType={deviceType} /> : ""}
            {activePage === "About" ? <About theme={theme} /> : ""}
        </section>
    );
}
