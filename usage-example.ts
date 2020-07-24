
import { NLP } from './nlp.ts'
import {exampleTrainingData} from './training-data.ts'


const trainingData = JSON.parse(exampleTrainingData)
const languages = ['en']


const clientId = (await NLP.train(trainingData.documents, trainingData.answers, languages)).clientId
console.log(await NLP.process('Hi', 'en', clientId))

