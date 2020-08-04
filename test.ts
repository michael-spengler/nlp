import { fail } from "https://deno.land/std/testing/asserts.ts";

import { NLP } from './nlp.ts'

import { exampleTrainingData } from './training-data.ts'


const languages = ['en']

Deno.test("training and getting an appropriate response ", async (): Promise<void> => {

    const clientId = (await NLP.train(exampleTrainingData.documents, exampleTrainingData.answers, languages)).clientId

    if (typeof (clientId) === "string" && Number(clientId) > 1595612098416) {
        const answer = (await NLP.getResponse('Hi', languages[0], clientId)).nlpResult.answer
        if (answer.indexOf('Hi') === -1) {
            fail("error during getting an appropriate answer")
        }
    } else {
        fail("error during training")
    }
});

