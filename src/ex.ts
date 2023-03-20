import axios, {AxiosError} from "axios";


async function getUserFromGithub(user: string) {
    try {
        const response = await axios.get('https://api.github.com/users/${user}')
        if(response.status!==200) {
            throw new Error('user not found')
        }
        console.log(response.data);
        
    } catch (error) {
        if(error instanceof AxiosError) {
            console.error({
                statusCode:error.response?.status,
                message:error.response
                })
        }else if(error instanceof Error) {
        console.error(error)
        }
}}

getUserFromGithub('arthurpessoanunes');
getUserFromGithub('arthurpnuness')