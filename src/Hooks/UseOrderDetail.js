import { useEffect, useState } from "react"

const UseOrderDetail = orderId => {
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://sleepy-lowlands-12245.herokuapp.com/myorder/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [orderId]);

    return [order, setOrder];
}

export default UseOrderDetail;