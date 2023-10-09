export class StringUtils {
  // eslint-disable-next-line class-methods-use-this
  public toUpperCase(arg: string) {
    if (!arg) {
      throw new Error('Invalid argument')
    }
    return toUpperCase(arg)
  }
}

export const toUpperCase = (arg: string) => arg.toUpperCase()

export type stringInfo = {
  lowerCase: string
  upperCase: string
  characters: string[]
  length: number
  extraInfo: object | undefined
}

export const getStringInfo = (arg: string): stringInfo => ({
  lowerCase: arg.toLowerCase(),
  upperCase: arg.toUpperCase(),
  characters: Array.from(arg),
  length: arg.length,
  extraInfo: {},
})
