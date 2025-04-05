import { Controller, Get,Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Get('download')
  async downloadExcel(@Res() res: Response): Promise<void> {

    const filePath = './public/remito/Book1.xlsx'; // Ruta al archivo Excel
    await this.appService.overwriteExcel(); // Sobreescribe el Excel
    const stream = await this.appService.getExcelStream(); // Obtén el archivo como stream

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=Book1.xlsx');
    stream.pipe(res); // Envíalo como descarga
  }










}
