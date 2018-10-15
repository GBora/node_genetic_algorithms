import { Individual } from '../individual/individual';
import { IFitnessEvaluationFunction } from '../fitness/IFitnessEvaluationFunction';
import { selectRandomFromArray } from '../utils/utils';

/**
 *
 *
 * @export
 * @class GenerationService
 */
export class GenerationService {
    evalFunction: any;

    /**
     * Calculates the fittness of every individual within a generation with a given 
     * evaluation function.
     *
     * @param {Array<Individual>} generation The group of individuals. 
     * @param {IFitnessEvaluationFunction} evaluationFunction The function which returns how fit and individual is.
     * @returns {Array<Individual>} The generation with each individual having an up-to-date fittness score.
     * @memberof GenerationService
     */
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

    /**
     * Generates a new individual by mating two other individuals and then possibly mutating 
     * some alelles.
     *
     * @param {Individual} mother
     * @param {Individual} father
     * @param {number} mutationRate An number between 0 and 1 
     * @returns {Individual}
     * @memberof GenerationService
     */
    mateIndividuals(mother: Individual, father: Individual, mutationRate: number): Individual {
        let child = new Individual();
        // split up the mother and father into pairs of alleles then select random one for child or mutate it
        for (let i = 0; i < mother.alleles.length; i++) {
            let allelePair = [mother.alleles[i], father.alleles[i]];
            let willMutate = Math.random() <= mutationRate;
            if (willMutate) {
                //Generate mutated allele
            } else {
                child.alleles.push(selectRandomFromArray(allelePair));
            }
        }
        return child;
    }

    runGeneration(currentPopulation: Array<Individual>, 
                  evaluationFunction: IFitnessEvaluationFunction,
                  threshold: number,
                  mutationRate: number): Array<Individual> {
        let newGeneration: Array<Individual> = [];
        const genSize: number = currentPopulation.length;
        currentPopulation = this.calculateFitness(currentPopulation, evaluationFunction);
        newGeneration = this.cullPopulation(currentPopulation, threshold);
        // Mate individuals to get numbers back up, only new children will be mutated
        let repopulateCounter: number = genSize - newGeneration.length;
        for (var i: number = 0;  i < repopulateCounter; i++) {
            // Need to select random survivors
            // TODO what if previous generation has less than 2 individuals
            newGeneration.push(this.mateIndividuals(selectRandomFromArray(newGeneration), 
                                                    selectRandomFromArray(newGeneration), 
                                                    mutationRate));
        }
        return newGeneration;
    }
}