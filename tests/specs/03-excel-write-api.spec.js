import { test, expect } from "@playwright/test";
import path from "path";
const filepath = path.resolve(__dirname, "../files-read/exceldata.xlsx");
import common from "../page-objects/common.js";

test("excel test", async ({ page }) => {
  let commonObj = new common();
  await commonObj.writeExcelCellValue(
    filepath,
    "regression",
    "A3",
    "your data"
  );
});

test("API hit Get call example", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  let data = body[1].name;
});

test("API hit Post call", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: {
        name: "jaimole",
        email: "jaimole@example.com",
      },
    }
  );

  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  let id = responseBody.id;
  expect(responseBody.name).toBe("John Doe");
});
