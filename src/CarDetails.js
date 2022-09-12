import React, {useRef, useState, useEffect} from "react"

export function CarDetails({initialData}) {

    const [data, setData] = useState(initialData)
    const inputRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        const [model, year, color] = event.target.elements
        const car = {
            model: model.value, 
            year: year.value, 
            color: color.value
        }

        setData(car)
        console.log(data)
    }

    useEffect(() => {
        inputRef.current.model.value = initialData.model;
        inputRef.current.color.value = initialData.color;
        inputRef.current.year.value = initialData.year;
    
      }, [initialData]);

    useEffect(() => setData(initialData), [initialData]);

    return(
        <form ref={inputRef} onSubmit={handleSubmit} >
            <input name="model" placeholder="Car Model"></input>
            <input name="year" placeholder="Car Year"></input>
            <input name="color" placeholder="Car Color"></input>
            <button>Send</button>
        </form>
    )
}

/*
Create a CarDetails uncontrolled form that uses the HTML Form API 
to allow the user to insert details about a car, such as the model, 
the year and the color. Allow the form to receive a initialData 
prop that contains the default values of each input, 
and reset the form every time the initialData value changes.
*/