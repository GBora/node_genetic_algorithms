"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var individual_1 = require("./individual");
var IndividualFactory = /** @class */ (function () {
    function IndividualFactory() {
        this.totalIndividualsProduced = 0;
    }
    IndividualFactory.prototype.getNewIndividual = function (genotype) {
        var individ = new individual_1.Individual();
        individ.fitness = 0;
        individ.generation = 0;
        individ.id = (this.totalIndividualsProduced + 1).toString();
        // Create genome
        var alleles = [];
        for (var i = 0; i < genotype.genes.length; i++) {
            var gene = genotype.genes[i];
            alleles.push(gene.newRandomAllele());
        }
        individ.alleles = alleles;
        this.totalIndividualsProduced++;
        return individ;
    };
    return IndividualFactory;
}());
exports.IndividualFactory = IndividualFactory;
//# sourceMappingURL=individualFactory.js.map