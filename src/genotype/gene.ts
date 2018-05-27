export class Gene {
    id: string = "gene";
    alleleOptions: Array<any> = [];

    newRandomAllele() {
        let index = Math.floor(Math.random() * this.alleleOptions.length);
        return this.alleleOptions[index];
    }
}