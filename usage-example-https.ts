
import { NLP } from 'https://raw.githubusercontent.com/michael-spengler/nlp/master/nlp.ts'
import {exampleTrainingData} from 'https://raw.githubusercontent.com/michael-spengler/nlp/master/training-data.ts'


const trainingData = JSON.parse(exampleTrainingData)
const languages = ['en']


const clientId = (await NLP.train(trainingData.documents, trainingData.answers, languages)).clientId
console.log(await NLP.getResponse('Hi', 'en', clientId))

