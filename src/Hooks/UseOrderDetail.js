import { useEffect, useState } from "react"

const UseOrderDetail = orderId => {
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [orderId]);

    return [order, setOrder];
}

export default UseOrderDetail;