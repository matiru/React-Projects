import { useEffect, useState } from "react";
import User from "./card";
import './styles.css';



export default function GithubProfileFinder() {

    const [username, setUsername] = useState('matiru');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);



    function handleSubmit() {
        fetchGithubUserData();

    }

    async function fetchGithubUserData() {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (data) {
            setUserData(data);
            setLoading(false);
            setUsername('');
        }
        console.log(data);
    }



    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input name="search-by-username"
                    type="text"
                    placeholder="Search by githubusername"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)} />

                <button onClick={handleSubmit}>Search</button>

                {
                    userData !== null ? <User user={userData} /> : null
                }
            </div>

        </div>
    );
}