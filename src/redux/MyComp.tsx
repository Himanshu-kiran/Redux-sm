import React from "react";
import { useAppSelector } from "./hooks";

const MyComp: React.FC = ()=>{
    const count=useAppSelector(s=> s.counter);
    return (
        <h1>MyCom:{count}</h1>
    )
}
export default MyComp;