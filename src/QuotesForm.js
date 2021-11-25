import React , {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import "./QuotesForm.css"

const QuotesForm = (props)=>{

    const { formSubmission , id: slNo , name: author , body: quote , handleToggle } = props
    const [ id , setID ] = useState(slNo ? slNo : uuidv4() )
    const [ name , setName ] = useState(author ? author : '')
    const [ body , setBody ] = useState(quote ? quote : '')

    const handleChange = (e)=>{
        e.preventDefault()

        const formData = {
            id: id,
            name: name,
            body: body
        }

        formSubmission(formData)
            if(handleToggle){
                handleToggle()
            }
        setName('')
        setBody('')
    }

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }

    const handleBodyChange = (e)=>{
        setBody(e.target.value)
    }


    return(
        <div className = "body" >
            <form onSubmit = { handleChange }>

                <label> Name </label> <br/>
                <input type = "text" value = { name} onChange = {handleNameChange}  ></input> <br/>
                <br/>
                <label> Body </label> <br/>
                <textarea value = { body } onChange = {handleBodyChange} ></textarea> <br/>

                <input type = "submit" value = "save" style = {{margin:"5px" , padding:"2px" , background:"green" , color:"white" , fontSize:"14px"}} />

            </form>

        </div>
    )
}

export default QuotesForm