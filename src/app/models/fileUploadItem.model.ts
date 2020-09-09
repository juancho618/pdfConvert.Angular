export class FileUploadItem {
    name: string;
    dateName: string;
    type: string;
    size: string;
    file: File;
    progress: number;

    constructor(name: string, dateName: string, type: string, size: string, file: File) {
        this.name = name;
        this.dateName = dateName;
        this.type = type;
        this.size = size;
        this.file = file;
        this.progress = 0;
    }
}
