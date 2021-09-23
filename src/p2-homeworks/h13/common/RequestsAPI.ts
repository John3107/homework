import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/test`,
})

export const requestsAPI = {
    createRequest(success: boolean) {
        let promise = instance.post(``, {success})
        return promise
    }
}
