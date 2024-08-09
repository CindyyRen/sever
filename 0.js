const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();
    const usesendwithgmail = users.filter((user) =>
      user.email.endsWith('@gmail.com')
    );
    const sortedResult = usesendwithgmail.sort((a, b) =>
      a.email.localeCompare(b.email)
    );
    const firstfive = sortedResult.slice(0, 3);
    console.log(firstfive);
  } catch (error) {
    console.error(error);
  }
};
fetchData();
//.sort((a,b)=>b.email.localeCompare(a.email)).slice(0,10)
