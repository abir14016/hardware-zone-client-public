import { useEffect, useState } from "react"

const UseToolDetail = toolId => {
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch(`https://sleepy-lowlands-12245.herokuapp.com/tool/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId]);

    return [tool, setTool];
}

export default UseToolDetail;