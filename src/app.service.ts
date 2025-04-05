import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async overwriteExcel/* (filePath: string): Promise<void> */() {

    let filePath ="./public/remito/Book1.xlsx"
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.getWorksheet(1); // Obtén la primera hoja
    sheet.getCell('A1').value = 'Nueva información'; // Sobrescribe una celda

    await workbook.xlsx.writeFile(filePath); // Guarda los cambios
    console.log('Archivo Excel sobrescrito exitosamente');
    return filePath; // Retorna la ruta del archivo

  }

  async getExcelStream(): Promise<fs.ReadStream> {
     let filePath ="./public/remito/Book1.xlsx"
    return fs.createReadStream(filePath); // Devuelve un stream del archivo Excel
  }






}
