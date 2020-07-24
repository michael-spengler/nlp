import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// import { Persistence } from "https://deno.land/x/persistence/persistence.ts"
import { Persistence } from './persistence.ts'

Deno.test("saving correctly to local file", async (): Promise<void> => {
    const pathToData = `${Deno.cwd()}/example-data/example-file.json`
    const testData: any[] = []

    await Persistence.saveToLocalFile(pathToData, JSON.stringify(testData))

    const localFileContentAsJSON = JSON.parse(await Persistence.readFromLocalFile(pathToData))

    assertEquals(localFileContentAsJSON, testData)

});


Deno.test("reading correctly from remote file", async (): Promise<void> => {
    // const linkToExampleDataRemote = ""
    // const remoteFileContentAsJSON = JSON.parse(await Persistence.readFromRemoteFile(linkToExampleDataRemote))

    // assertEquals(remoteFileContentAsJSON, [])
});


Deno.test("committing and pushing", async (): Promise<void> => {
    const projectPath = `${Deno.cwd()}/example-data`
    const org = 'michael-spengler'
    const repo = 'persistence'
    const userName = 'michael-spengler'
    const pw = 'from here on this test method is only for documentation :) - therefore commenting the following statement'
    // await Persistence.commitAndPush(projectPath, org, repo, userName, pw)
});
