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
