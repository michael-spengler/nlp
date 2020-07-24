export class Helper {
    public static async delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    public static getRandomArbitrary(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min)
    }

}