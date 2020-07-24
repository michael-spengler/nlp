export interface IDocument {
    languageCode: string,
    input: string,
    intent: string
}

export interface IAnswer {
    languageCode: string,
    intent: string,
    output: string
}