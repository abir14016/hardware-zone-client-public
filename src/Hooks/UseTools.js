import { useEffect, useState } from "react";

const UseTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-lowlands-12245.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

    return [tools, setTools];
}

export default UseTools;