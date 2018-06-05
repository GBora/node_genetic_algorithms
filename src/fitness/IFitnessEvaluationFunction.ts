import { Individual } from '../individual/individual';

export interface IFitnessEvaluationFunction {
    (individ: Individual): number;
}