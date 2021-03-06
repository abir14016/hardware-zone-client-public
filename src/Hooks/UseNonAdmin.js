import { useEffect, useState } from "react"

const UseNonAdmin = user => {
    const [nonAdmin, setNonAdmin] = useState(false);
    const [nonAdminLoading, setNonAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://sleepy-lowlands-12245.herokuapp.com/nonadmin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setNonAdmin(data.admin);
                    setNonAdminLoading(false);
                })
        }
    }, [user])

    return [nonAdmin, nonAdminLoading];
}

export default UseNonAdmin;