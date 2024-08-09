// const fetchData = async () => {
//   try {
//     const response = await fetch('http://localhost:5000/users');
//     const users = await response.json();
//     const usesendwithgmail = users.filter((user) =>
//       user.email.endsWith('@gmail.com')
//     );
//     const sortedResult = usesendwithgmail.sort((a, b) =>
//       a.email.localeCompare(b.email)
//     );
//     const firstfive = sortedResult.slice(0, 3);
//     console.log(firstfive);
//   } catch (error) {
//     console.error(error);
//   }
// };
// fetchData();
//.sort((a,b)=>b.email.localeCompare(a.email)).slice(0,10)
const API_URL = 'http://localhost:5000/users';

const fetchAndProcessUsers = async ({
  domain = 'gmail.com',
  limit = 3
} = {}) => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    
    return users
      .filter(user => user.email.endsWith(`@${domain}`))
      .sort((a, b) => a.email.localeCompare(b.email))
      .slice(0, limit);

  } catch (error) {
    console.error('Failed to fetch and process users:', error.message);
    return [];
  }
};

fetchAndProcessUsers().then(console.log).catch(console.error);

// 使用自定义参数
// fetchAndProcessUsers({ domain: 'yahoo.com', limit: 5 }).then(console.log).catch(console.error);