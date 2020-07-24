import { fail } from "https://deno.land/std/testing/asserts.ts";

import { NLP } from 'https://raw.githubusercontent.com/michael-spengler/nlp/master/nlp.ts'

import {exampleTrainingData} from 'https://raw.githubusercontent.com/michael-spengler/nlp/master/training-data.ts'


const languages = ['en']

Deno.test("training and getting an appropriate response ", async (): Promise<void> => {

    const clientId = (await NLP.train(exampleTrainingData.documents, exampleTrainingData.answers, languages)).clientId

    if (typeof(clientId) === "string" && Number(clientId) > 1595612098416){
        // await assertAppropriateResponse(clientId)
    } else {
        fail("error during training")
    }
});

async function assertAppropriateResponse(clientId: string): Promise<void> {
    console.log(await NLP.getResponse('Hi', languages[0], clientId))
    // const answer = ().nlpResult.answer

    // if (answer.indexOf('Hi') === -1) {
    //     fail("error during getting an appropriate answer")
    // }

}