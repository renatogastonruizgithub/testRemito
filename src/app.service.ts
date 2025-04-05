import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';

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
    sheet.getCell('A1').value = 'Nueva información fdfdffdf'; // Sobreescribe una celda

    await workbook.xlsx.writeFile(filePath); // Guarda los cambios
    console.log('Archivo Excel sobrescrito exitosamente');
  }

}
