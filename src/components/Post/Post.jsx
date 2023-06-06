import React, { useState } from "react";
import './post.css'

const articlies = [
    {
        id: 1,
        name: 'Благодаря проекту "Ауыл аманаты" около 4000 жамбылцев открыли свое дело',
    },
    {
        id: 2,
        name:'Исторический рекорд: сколько налогов поступило в казахстанский бюджет',
    },
    {
        id: 3,
        name:'"Если бы я знала". Блогер раскритиковала популярное шоу в Таиланде'
    }
]

//articlies
const Post = () => {
    const [data, serData] = useState(articlies)
    const [title, settitle] = useState('')
    const onSave = () => {
        serData([
            ...data, 
            {
                id: data.length + 1,
                name: title,
            }])
        //Сброс
        settitle('')
    }

    function onDelete(id) {
        console.log('Id', id)

        const result = data.filter((a) => {
            return a.id !== id
        })

        serData(result)
    }

    


    return (
        
        <div>
            {/* forma */}
            <div>
                <input type="text" placeholder="Напишите статью" value={title}
                    onChange={(e) => {
                    const title = e.target.value
                    console.log('value:', title)
                    settitle(title)
                    
                }}/>
                <button type="button" onClick={onSave}>Save</button>
                
            </div>
            {data.map(a => {
                return (
                    <div key={a.id}>
                        {/* <div>ID: {a.id}</div> */}
                        <h2>{a.name}</h2>
                        <button type='button' onClick={()=> onDelete(a.id)}>Delete</button>
                    </div>
                ) 
                    
            })}
        </div>
    )
}   
export default Post;