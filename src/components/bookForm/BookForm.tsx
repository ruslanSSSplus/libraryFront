import React from "react";

import { Input } from 'antd'
import './BookForm.css'


interface AppProps {
    handleSubmit: (e: any) => void 
    values: {
        picture: string
        name: string
        year: string
        genre:  string
        author:  string
        id?: number
    }
    handleChange: (target: handleProps) => void 
}

interface handleProps {
    target: {
        value: string,
        name: string
    }

}



const BookForm: React.FC<AppProps> = ({handleSubmit, handleChange, values}) => {



    const inputs = [
        {  
            tag: 'Обложка',
            placeholder: 'put url here',
            name: "picture",
            value: values.picture,
        },
        {  
            tag: 'Название',
            placeholder: 'Name of the book',
            name: "name",
            value: values.name,
        },
        {   
            tag: 'Год',
            placeholder: 'year',
            name: "year",
            value: values.year,
        },
        {   
            tag: 'Жанр',
            placeholder: 'genre',
            name: "genre",
            value: values.genre,
        },
        {   
            tag: 'Автор',
            placeholder: 'author',
            name: "author",
            value: values.author,
        },  
    ]


    return (
        <div>
               <form  onSubmit={handleSubmit} className="wrapper__form">


                {inputs.map(item => 
                <div > {item.tag}
                    <Input
                        type="text"
                        placeholder={item.placeholder}
                        name={item.name}
                        value={item.value}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        className="input__field"
                    />
                </div>)}


                {/* <div > Обложка
                    <Input
                        type="text"
                        placeholder="put url here"
                        name="picture"
                        value={values.picture}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        className="input__field"
                    />
                </div>

               
                <div > Название
                    <Input
                        type="text"
                        placeholder="Name of the book"
                        name="name"
                        value={values.name}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        className="input__field"
                    />
                </div>
                <div > Год 
                    <Input
                        type="text"
                        placeholder="year"
                        name="year"
                        value={values.year}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        className="input__field"
                    />
                </div>
                <div > Жанр
                    <Input
                        type="text"
                        placeholder="genre"
                        name="genre"
                        value={values.genre}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        className="input__field"
                    />
                </div>
                <div > Автор
                    <Input
                        type="text"
                        placeholder="author"
                        name="author"
                        value={values.author}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        className="input__field"
                    />
                </div> */}

            
                <button type="submit" className="save__btn">
                Сохранить 
                </button>
            </form>

        </div>
    );
}

export default BookForm