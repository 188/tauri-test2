import { describe, test, expect } from "vitest"
import jsonParse from "../jsonParse"

describe("jsonParse", () => {
  test("parses without errors for valid JSON", () => {
    const testJSON = JSON.stringify({
      name: "hoppscotch",
      url: "https://postdata.cn",
      awesome: true,
      when: 2019,
    })

    expect(() => jsonParse(testJSON)).not.toThrow()
  })

  test("throws error for invalid JSON", () => {
    const testJSON = '{ "name": post "url": true }'

    expect(() => jsonParse(testJSON)).toThrow()
  })

  test("thrown error has proper info fields", () => {
    expect.assertions(3)

    const testJSON = '{ "name": post "url": true }'

    try {
      jsonParse(testJSON)
    } catch (e) {
      expect(e).toHaveProperty("start")
      expect(e).toHaveProperty("end")
      expect(e).toHaveProperty("message")
    }
  })
})
