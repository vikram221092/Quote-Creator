import React, {useState} from 'react'
import EditQuote from './EditQuote'
import './QuotesItem.css'

const QuotesItem = (props)=>{
    const [ toggle , setToggle ] = useState(false)

    const { id , name , body , removeItem , editItem } = props

    const handleRemove = ()=>{
        const confirmRemove = window.confirm("Are you sure...?")
        if(confirmRemove){
        removeItem(id)
        }
    }

    const handleToggle = ()=>{
        const result = !toggle
        setToggle(result)
    }

    return(
        <div>
            { toggle ? (<div>
                <EditQuote 
                    id={id}  
                    name={name}  
                    body={body} 
                    editItem = {editItem} 
                    handleToggle = {handleToggle} /> 
                <button style = {{margin:"5px" , padding:"2px" , background:"red" , color:"white", fontSize:"14px"}} onClick = {handleToggle}> cancel </button>
            </div>): (
                <div className="quote">
                    <blockquote style = {{fontSize:"20px" , fontWeight:"600" , textAlign:"justify" , textJustify:"auto"}}> {body} - {name} </blockquote>
                        <br/>
                    <button style = {{margin:"5px" , padding:"2px" , background:"green" , color:"white" , fontSize:"14px"}} onClick = {handleToggle}> edit </button>
                    <button style = {{margin:"5px" , padding:"2px" , background:"red" , color:"white" ,fontSize:"14px"}} onClick = {handleRemove}> remove </button>
                    <hr/>
                </div>
            ) }

          
        </div>
    )
}

export default QuotesItem