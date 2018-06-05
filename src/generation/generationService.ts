import { Individual } from '../individual/individual';
import { IFitnessEvaluationFunction } from '../fitness/IFitnessEvaluationFunction';

export class GenerationService {
    evalFunction: any;

    calculateFitness(generation: Array<Individual>, evaluationFunction: IFitnessEvaluationFunction): Array<Individual> {
        generation.forEach((individ: Individual) => {
            individ.fitness = evaluationFunction(individ);
        });

        return generation;
    }

    cullPopulation(generation: Array<Individual>, threshold: number): Array<Individual> {
        generation.forEach((individ: Individual, index: number) => {
            if (individ.fitness < threshold) {
                delete generation[index];
            }
        })

        return generation;
    }

    runGeneration(currentPopulation: Array<Individual>, evaluationFunction: IFitnessEvaluationFunction, threshold: number): Array<Individual> {
        let newGeneration: Array<Individual> = [];
        currentPopulation = this.calculateFitness(currentPopulation, evaluationFunction);
        newGeneration = this.cullPopulation(currentPopulation, threshold);
        // Mate individuals to get numbers back up
        // Apply mutations
        return newGeneration;
    }
}