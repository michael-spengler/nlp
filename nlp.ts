import api from 'https://deno.land/x/api/index.ts' 
import { IDocument, IAnswer } from "https://raw.githubusercontent.com/michael-spengler/nlp/master/interfaces.ts"

export class NLP {
    
    public static async train(documents: IDocument[], answers: IAnswer[], languageCodes: string[], nlpProvider: string = "https://fancy-chats.com:4443"): Promise<any> {
        const result = api.post(`${nlpProvider}/train/`, { documents, answers, languageCodes })
        console.log(`training successful`)
        return result
    }

    public static async getResponse(input: string, languageCode: string, clientId: string, nlpProvider: string = "https://fancy-chats.com:4443"): Promise<any> {
        const url = `${nlpProvider}/process/input/${input}/languageCode/${languageCode}/clientId/${clientId}`
        return (await api.get(url))
    }
}


