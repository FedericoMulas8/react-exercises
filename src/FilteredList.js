import React, {useMemo} from "react";

export function FilteredList(props) {
    
    const filteredList = props.list.map((elem, index) => elem.age > 18 && <li key={index}>{elem.name}</li>);

    const filter = useMemo(() => filteredList, [filteredList])

    return (
        <div>
            <ul>
                {filter}
            </ul>
        </div>
    )
}

/*
Create a FilteredList component that receives a list of objects 
each containing a name, an id and a age prop. The FilteredList component
 should render only the items of the list whose age is greater than 18, 
 and the filtering should only happen when the list changes. Use useMemo 
 to memoize the filtered list.
*/