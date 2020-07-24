import { IDocument, IAnswer } from "./interfaces.ts"
import api from 'https://deno.land/x/api/index.ts' 

export class NLP {
    
    public static async train(documents: IDocument[], answers: IAnswer[], nlpProvider: string = "https://fancy-chats.com:4443"): Promise<void> {
        await api.post(`${nlpProvider}/train/`, { documents, answers })
    }

    public static async process(input: string, languageCode: string, nlpProvider: string = "https://fancy-chats.com:4443"): Promise<any> {
        return (await api.get(`${nlpProvider}/process/input/${input}/languageCode/${languageCode}`))
    }
}


