export const menus =[
    {
        label: 'Home',
        to : '/',
    },
    {
        label : 'Profile',
        to : 'profile',
        children : [
            {
                label : 'details',
                to : 'details',
                children:[
                    {
                        label : 'location',
                        to : 'location',
                        children:[
                            {
                                label : 'city',
                                to : 'city'
                            },
                            {
                                label : 'state',
                                to : 'state'
                            }
                        ],
                    },]
            },
        ]
    },
    {
        label : 'Settings',
        to : 'settings',
        children :[
            {
                label: 'Account',
                to : 'account',
            },
            {
                label : 'Security',
                to : 'security',
                children:[
                    {
                        label : 'login',
                        to : 'login'
                    },
                    {
                        label : 'Register',
                        to : 'register'
                    }
                ]
            }

        ]
    }
];

export default menus;