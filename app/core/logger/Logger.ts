export class Logger {

    static i(logTag: string, message: string) {
        console.info(logTag + ": " + message)
    }

    static e(logTag: string, message: string) {
        console.error(logTag + ": " + message)
    }
}