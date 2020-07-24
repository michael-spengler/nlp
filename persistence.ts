import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"
import axiod from "https://deno.land/x/axiod/mod.ts";

export class Persistence {

	private static decoder = new TextDecoder('utf-8')
	private static encoder = new TextEncoder()

	public static async saveToLocalFile(filePath: string, data: string) {

		await Deno.writeFile(`${filePath}`, Persistence.encoder.encode(data))
	}

	public static async readFromLocalFile(localFilePath: string): Promise<string> {
		return Persistence.decoder.decode(await Deno.readFile(localFilePath))
	}

	public static async commitAndPush(projectPath: string, org: string, repo: string, username: string, pw: string, commitMessage: string = "automated commit"): Promise<void> {
		let commandToBeExecuted = `cd ${projectPath}`
		commandToBeExecuted = `${commandToBeExecuted} && git add .`
		commandToBeExecuted = `${commandToBeExecuted} && git commit -m ${commitMessage}`
		commandToBeExecuted = `${commandToBeExecuted} && git push https://${username}:${pw}@github.com/${org}/${repo}.git"`
		console.log(await CommandLineProcessor.process(commandToBeExecuted))
	}

	public static async readFromRemoteFile(remoteFilePath: string): Promise<string> {
		return (await axiod.get(remoteFilePath)).data
	}

}
