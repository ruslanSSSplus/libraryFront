import { loginType } from "../Types/Types"
import { API_URL } from "./ApiBaseName"

export const loginAPI = async (data: loginType) => {

    return await fetch(`${API_URL}login`, {
        method: 'POST', 
        body: JSON.stringify(data), // Тело запроса в JSON-формате
        headers: {
          // Добавляем необходимые заголовки
          'Content-type': 'application/json; charset=UTF-8',
        },
     
    }).then(response => response.json()).then(res => res.login)
}

export const authAPI = async (data: loginType) => {
  
    return await fetch(`${API_URL}auth`, {
        method: 'POST', 
        body: JSON.stringify(data), // Тело запроса в JSON-формате
        headers: {
          // Добавляем необходимые заголовки
          'Content-type': 'application/json; charset=UTF-8',
        },
     
    }).then(response => response.json()).then(res => res.login)
}