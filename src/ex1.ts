import axios, {AxiosError} from "axios";


async function getRepositories(repo: string) {
    try {
        const response = await axios.get('https://api.github.com/respo/${user}')
        if(response.status!==200) {
            return
        }
    } catch (error) {
        if(error instanceof AxiosError) {
            console.error({
                statusCode:error.response?.status,
                message:error.response
                })  
    }
}}

getRepositories('arthurpn-pessoa/scrapbook-es6');
getRepositories('arthurpn-pessoa/scraaap');