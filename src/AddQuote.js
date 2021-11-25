import React from 'react'
import QuotesForm from './QuotesForm'

const AddQuite = (props)=>{

    const { addItem } = props

    const formSubmission = (formData)=>{
            addItem(formData)
    }

    return(
        <div>
          <h2> Add Quote </h2>

          <QuotesForm formSubmission = {formSubmission} />
        </div>
    )
}

export default AddQuite