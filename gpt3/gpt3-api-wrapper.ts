import { IOpenAIConfig } from "./interfaces.ts";
import { Request } from "https://deno.land/x/request";

// import { openAIKey } from "../topsecret/.env.ts";
// import { openAISecret } from "../topsecret/.env.ts";

export class GPT3APIWrapper {

    private static openAIConfig: IOpenAIConfig = {
        completionsEndpoint:
            "https://api.openai.com/v1/engines/davinci/completions",
        // key: openAIKey,
        // secretKey: openAISecret,
    };

    public static complete(text: string) {
        const url = `${GPT3APIWrapper.openAIConfig.completionsEndpoint}/${text}`
        return Request.get(url)
    }

    public static async train(trainingData: any) {
        // tbd
    }

    public static async getResponse(input: any) {
        // tbd
    }
}