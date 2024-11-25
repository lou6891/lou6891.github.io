
export const settings = {

    DeviceType_setting : {
        "Desktop" : 1150,
        "Mobile" : 500,
    },


    Portfolio_settings : {
        // list of names of repos not to be included in the portfolio page,
        // thee will be excluded before calculating how many repository to show
        gitHub_repos_not_to_include : [
            "lou6891.github.io",
            "leetcode_challenges"
        ],

        // list of gitRepos to change position from any index in the repos array the beginning of the array,
        // These repos will be shown first, the order of the array will reflect the order of the rearrangement
        // ex: original order = Repo1, Repo2, Repo3, Repo4
        // gitHub_to_rearrange : ["Repo3", "Repo4"]
        // new order = Repo3, Repo4 , Repo1, Repo2,
        gitHub_to_rearrange : [
        ],

        // all or the number of repos to show
        GitHub_repos_to_show : 6,

        GiHub_repos_sort_by : "Size",
        // Created_date_ascending
        // Created_date_descending
        // Last_updated
        // Size


    },

    LandingPage : "About",
    //Options : About / Portfolio

}