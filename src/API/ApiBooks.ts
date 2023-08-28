import { bookType, sendedBookType } from "../Types/Types"
import { API_URL } from "./ApiBaseName"

export const getBooksFromApi = () => {
    return fetch(`${API_URL}books`, {
        method: 'GET', 
    }).then(response => response.json())
}

export const postBookToApi = async (data: sendedBookType) => {
    return await fetch(`${API_URL}addBook`, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
     
    }).then(response => response.json())
}

export const deteleBookFromApi = async (id: number) => {
  
    return await fetch(`${API_URL}delete` , {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({id}), 
    }).then(response => response.json())
}

export const editBookFromApi = async (data: bookType) => {
 
    return await fetch(`${API_URL}edit` , {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(data), 
    }).then(response => response.json())
}
