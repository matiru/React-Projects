import Accordian from '../accordian';
import TreeView from '../tree-view';
import menus from '../tree-view/data.js';
import TabTest from '../custom-tabs/tab-test.jsx';
import GithubProfileFinder from '../github-profile-finder/index.jsx';
import TicTacToe from '../tic-tac-toe/index.jsx';
import { useContext } from 'react';
import { FeatureFlagContext } from './context/index.jsx';






export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />
        },
        {
            key: 'showGitHubProfileFinder',
            component: <GithubProfileFinder />
        },
        {
            key: 'showCustomTabs',
            component: <TabTest />
        }
    ]


    function checkEnabledFlags(getCurrentKey) {

        return enabledFlags[getCurrentKey];

    }

    if (loading) return <h1>Loading  Data ...</h1>




    return (
        <div>
            <h1>
                Feature Flags
            </h1>

            {
            componentsToRender.map(componentItem => 
            checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }

        </div>

    )

}