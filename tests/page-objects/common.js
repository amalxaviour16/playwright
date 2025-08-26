import ExcelJS from "exceljs";
const workbook = new ExcelJS.Workbook();
import path from "path";
const filepath = path.resolve("../", "files-read", "exceldata.xlsx");

class common {
  constructor() {}

  async readEntireExcelData(sheetName) {
    await workbook.xlsx.readFile(filepath);
    const sheet = await workbook.getWorksheet(sheetName);
    await sheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        console.log(cell.value);
      });
    });
  }

  async readCellData(sheetName, row, col) {
    await workbook.xlsx.readFile(filepath);
    const sheet = await workbook.getWorksheet(sheetName);
    return sheet.getRow(row).getCell(col).value;
  }
}

const reader = new common();

let data = await reader.readCellData("regression", 1, 2);
console.log(data);
