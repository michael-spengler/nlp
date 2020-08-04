
import { NLP } from 'https://deno.land/x/nlp@1.0.0/nlp.ts'
import {exampleTrainingData} from 'https://deno.land/x/nlp@1.0.0/training-data.ts'


const languages = ['en']

const trainingResult = await NLP.train(exampleTrainingData.documents, exampleTrainingData.answers, languages)
console.log(`trainingResult: \n${JSON.stringify(trainingResult)}`)

const response = await NLP.getResponse('Hi', languages[0], trainingResult.clientId)
console.log(`response: \n${JSON.stringify(response)}`)

