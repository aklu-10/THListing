import React, {useEffect, useState} from 'react'
import { getResource } from '../api'

const TabularListing = ({api}) => 
{
    const [list, setList] = useState([]);
    const [rowSpanState, setRowSpan] = useState(1);

    let elem = <tr><td rowSpan={rowSpanState}>{"Hello"}</td><td rowSpan={rowSpanState-1}>{"Bye"}</td></tr>

    function handleUpdate()
    {
        setRowSpan(rowSpanState+1);
    }

    useEffect(()=>
    {
        getResource(api)
        .then(res=>setList(res[Object.keys(res)[0]]))
        .catch(err=>console.log(err))
    },[])

  return (
    <table>
    {/* {
        list.length!=0 &&
        generateKeys(list[0])
    } */}
{/* state = 1
    new row -> state ++
 */}
        {elem}
        <button onClick={handleUpdate}>Update</button>

        {/* <tr>
            <th rowSpan={3}>id</th>
            <th rowSpan={3}>first name</th>
            <th rowSpan={3}>last name</th>
            <th rowSpan={3}>age</th>
            <th colSpan={2}>hair</th>
            <th colspan={5}>address</th>
        </tr>

        <tr>
            <th rowSpan={2}>color</th>
            <th rowSpan={2}>type</th>
            <th rowSpan={2}>address</th>
            <th rowSpan={2}>city</th>
            <th colspan={2}>coordinates</th>
            <th rowSpan={2}>postal</th>
            <th rowSpan={2}>state</th>
        </tr>

        <tr> */}
            {/* <th>lat</th>
            <th>lon</th>
        </tr> */}



    </table>
  )
}

export default TabularListing