export class Gene {
    id: string = "gene";
    alleleOptions: Array<any> = [];

    get newRandomAllele(): any {
        let index = Math.floor(Math.random() * this.alleleOptions.length) + 1;
        return this.alleleOptions[index];
    }
}