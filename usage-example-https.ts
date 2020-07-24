
import { NLP } from 'https://raw.githubusercontent.com/michael-spengler/nlp/master/nlp.ts'
import {exampleTrainingData} from 'https://raw.githubusercontent.com/michael-spengler/nlp/master/training-data.ts'


const languages = ['en']

const clientId = (await NLP.train(exampleTrainingData.documents, exampleTrainingData.answers, languages)).clientId
console.log(await NLP.getResponse('Hi', languages[0], clientId))

