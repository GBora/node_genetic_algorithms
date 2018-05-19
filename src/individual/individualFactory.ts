import { Individual } from "./individual";
import { Genotype } from "../genotype/genotype";

export class IndividualFactory {
	totalIndividualsProduced: number = 0;

	getNewIndividual(genotype: Genotype): Individual {
		let individ = new Individual();
		individ.fitness = 0;
		individ.generation = 0;
		individ.id =  (this.totalIndividualsProduced + 1).toString();
		// Create genome
		let alleles = [];
		for (let i: number = 0; i < genotype.genes.length; i++) {
			let gene = genotype.genes[i];
			alleles.push(gene.newRandomAllele());
		}
		individ.alleles = alleles;
		this.totalIndividualsProduced ++;

		return individ;
	}
}