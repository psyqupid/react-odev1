import axios from "axios";


async function getData(userId){
    var web1 = `https://jsonplaceholder.typicode.com/users/${userId}`
    var web2 = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

    const users = await axios(web1);


    const posts = await axios(web2);

    return{users, posts};
    
};

export default getData;









