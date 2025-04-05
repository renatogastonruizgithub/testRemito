import * as fs from 'fs';
export declare class AppService {
    getHello(): string;
    overwriteExcel(): Promise<string>;
    getExcelStream(): Promise<fs.ReadStream>;
}
