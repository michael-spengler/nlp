# Natural Language Processing (NLP)

## Usage Example for Your Code
```
import { NLP } from 'https://deno.land/x/nlp@1.0.0/nlp.ts'
import {exampleTrainingData} from 'https://deno.land/x/nlp@1.0.0/training-data.ts'


const languages = ['en']

const trainingResult = await NLP.train(exampleTrainingData.documents, exampleTrainingData.answers, languages)
console.log(`trainingResult: \n${JSON.stringify(trainingResult)}`)

const response = await NLP.getResponse('Hi', languages[0], trainingResult.clientId)
console.log(`response: \n${JSON.stringify(response)}`)
```

## Call Usage Example via Command Line
```
deno run --allow-net --reload https://deno.land/x/nlp/usage-example.ts
```

## Execute the tests
```
deno test --allow-net --reload https://deno.land/x/nlp/test.ts

``` 

## Background Info
This module leverages https://github.com/fancy-flashcard/fancy-nlp until a pure Deno based solution is available.  
The following comment might be interesting if you want to look into some background info: https://github.com/axa-group/nlp.js/issues/510#issuecomment-664246574  

Feel free to contribute via pull requests. 

## Link to Deno
This module can be found here: [https://deno.land/x/nlp](https://deno.land/x/nlp).
