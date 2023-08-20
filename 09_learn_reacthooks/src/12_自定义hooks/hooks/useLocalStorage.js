import { useEffect, useState } from "react";
function useLoaclStorage(keyword) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem(keyword)))
    useEffect(() => {
        localStorage.setItem(keyword, JSON.stringify(data))
    }, [data, keyword])
    return [data, setData]
}

export default useLoaclStorage