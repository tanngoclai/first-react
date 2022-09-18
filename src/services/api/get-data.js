const data = [
    {
        "id": 1,
        "username": "john",
        "password": "1234"
    }
];

const DataServices = {
    getAllData: function() {
        return data;
    },

    getUser: function(username, password) {
        const user = data.find(user => user.username === username && user.password === password);
        return user;
    }
};

export default DataServices;

