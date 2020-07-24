export const exampleTrainingData = {
    documents: [
        {
            languageCode: "en",
            input: "Hi",
            intent: "greetings.hi"
        },
        {
            languageCode: "en",
            input: "Hey",
            intent: "greetings.hi"
        },
        {
            languageCode: "en",
            input: "Hey Hey",
            intent: "greetings.hi"
        }
    ],
    answers: [
        {
            languageCode: "en",
            intent: "greetings.hi",
            output: ":) Hi"
        },
        {
            languageCode: "en",
            intent: "greetings.hi",
            output: ":) Hi. How are you?"
        }
    ]
}