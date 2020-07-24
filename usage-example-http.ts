
import { NLP } from 'https://raw.githubusercontent.com/michael-spengler/nlp/master/nlp.ts'
import {exampleTrainingData} from 'https://raw.githubusercontent.com/michael-spengler/nlp/master/training-data.ts'


const trainingData = JSON.parse(exampleTrainingData)
const languages = ['en']

console.log('ok')
const clientId = (await NLP.train(trainingData.documents, trainingData.answers, languages, "http://fancy-chats.com:8080")).clientId
console.log(await NLP.getResponse('Hi', 'en', clientId, "http://fancy-chats.com:8080"))

