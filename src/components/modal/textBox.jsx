import { useEffect, useRef, useState } from 'react'



export default function textBox() {
    const textAreaRef = useRef(null);
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        setVal(e.target.value);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto"
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val])


  return (
    <div>
        
    </div>
  )
}
