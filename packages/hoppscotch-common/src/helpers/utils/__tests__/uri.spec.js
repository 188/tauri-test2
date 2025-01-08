import { describe, expect, test } from "vitest"
import { parseUrlAndPath } from "../uri"

describe("parseUrlAndPath", () => {
  test("has url and path fields", () => {
    const result = parseUrlAndPath("https://postdata.cn/")

    expect(result).toHaveProperty("url")
    expect(result).toHaveProperty("path")
  })

  test("parses out URL correctly", () => {
    const result = parseUrlAndPath("https://postdata.cn/test/page")

    expect(result.url).toBe("https://postdata.cn")
  })
  test("parses out Path correctly", () => {
    const result = parseUrlAndPath("https://postdata.cn/test/page")

    expect(result.path).toBe("/test/page")
  })
})
