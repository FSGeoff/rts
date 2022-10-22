import React, {useState} from 'react';

const users = [
    {name: 'Kiara', age: 30},
    {name: 'Inity', age: 16},
    {name: 'Gyasi', age: 22}
];

const UserSearch: React.FC = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number | undefined}>();
    const onClick = () => {
        setName('');
        const foundUser = users.find((user) => {
            return user.name === name;

        });
       setUser(foundUser);
    };
    return (
        <div>
        <h3>
            User Search
        </h3>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={onClick}>Find User</button>
        <div><br/>
            {user && user.name}  {user && user.age}
        </div>
    </div>
    );
};

export default UserSearch;