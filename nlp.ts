import { Request } from 'https://deno.land/x/request@1.1.2/request.ts' 
import { IDocument, IAnswer } from "https://deno.land/x/nlp@1.1.2/interfaces.ts"

export class NLP {
    
    public static async train(documents: IDocument[], answers: IAnswer[], languageCodes: string[], nlpProvider: string = "https://fancy-chats.com:4443"): Promise<any> {
        const result = await Request.post(`${nlpProvider}/train/`, { documents, answers, languageCodes })
        return result
    }
    
    public static async getResponse(input: string, languageCode: string, clientId: string, nlpProvider: string = "https://fancy-chats.com:4443"): Promise<any> {
        const url = `${nlpProvider}/process/input/${input}/languageCode/${languageCode}/clientId/${clientId}`
        const result = await Request.get(url)
        return result
    }

}


