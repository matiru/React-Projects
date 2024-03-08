


const dummyApiResponse = {

    showTicTacToeBoard: true,
    showAccordian: false,
    showTreeView: true,
    showGitHubProfileFinder: true,
    showCustomTabs: false,
}


function featureFlagsDataServiceCall(){
    return new Promise((resolve , reject) =>{
        if(dummyApiResponse) setTimeout(() => resolve(dummyApiResponse), 500);
        else reject('Error fetching data');
    })
}

export default featureFlagsDataServiceCall;