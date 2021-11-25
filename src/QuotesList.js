import React from 'react'
import QuotesItem from './QuotesItem'
import "./QuotesList.css"

const QuotesList = (props)=>{

    const { quotes , removeItem , editItem } = props

    return(
        <div>
           
            {
                quotes.length === 0 ? (
                <div> <h2> No Quotes found </h2>
                            <p className = "p"> Add your first quotes </p> 
                 </div> 
                 ) : (
                     <div className = "list" > 
                             <h2> Quotes - { quotes.length } </h2>
                           { quotes.map((quote)=>{
                               return <QuotesItem key = {quote.id} {...quote} removeItem = {removeItem} editItem = {editItem} />
                           }) }
                     </div>
                 )
            }
        </div>
    )
}

export default QuotesList