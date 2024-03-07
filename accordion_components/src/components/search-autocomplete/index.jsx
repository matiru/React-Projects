import { useEffect, useState } from 'react';
import Suggestions from './suggestions';


export default function SearchAutocomplete() {


    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([])



    function handleChange(event) {
        const query = event.target.value.toLowerCase();

        setSearchTerm(query);
        if (query.length > 1) {
            console.log(users);

            const filteredData = users && users.length
             ? users.filter((item)=> item.toLowerCase().indexOf(query) > -1) : []
            setFilteredUsers(filteredData);
            setShowDropDown(true);

        }
        else {
            setShowDropDown(false);
        }

    }

    async function fetchListofUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
               
                setLoading(false);
                setError(null);

            }


            console.log(data);


        } catch (error) {
            setError(error);
            setLoading(false);
        }


    }


    useEffect(() => {

        fetchListofUsers();

    }, [])



    return (
        <div className="search-autocomplete-container">
            {loading ? <div>Loading...</div> : (
            <input
                onChange={handleChange}
                value={searchTerm}
                name='search-users'
                placeholder="Search users ..."
                type="text" />


    )}
                {
                    showDropDown && <Suggestions data={filteredUsers} />
                }
       

        </div>
    );
}