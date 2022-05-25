import { useEffect, useState } from "react"

const UseToolDetail = toolId => {
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/tool/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId]);

    return [tool, setTool];
}

export default UseToolDetail;