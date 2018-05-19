define("genome/genome", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Genome = /** @class */ (function () {
        function Genome() {
            this.genes = [];
        }
        return Genome;
    }());
    exports.Genome = Genome;
});
define("individual/individual", ["require", "exports", "genome/genome"], function (require, exports, genome_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Individual = /** @class */ (function () {
        function Individual() {
            this.id = "0";
            this.genome = new genome_1.Genome();
            this.fitness = 0;
            this.generation = 0;
        }
        return Individual;
    }());
    exports.Individual = Individual;
    ;
});
define("individual/individualFactory", ["require", "exports", "individual/individual", "genome/genome"], function (require, exports, individual_1, genome_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IndividualFactory = /** @class */ (function () {
        function IndividualFactory() {
            this.totalIndividualsProduced = 0;
        }
        IndividualFactory.prototype.getNewIndividual = function (genomeLength, genotype) {
            var individ = new individual_1.Individual();
            // individ.genome;
            individ.fitness = 0;
            individ.generation = 0;
            individ.id = (this.totalIndividualsProduced + 1).toString();
            // Create genome
            var genome = new genome_2.Genome();
            genome.genes = [];
            for (var i = 0; i < genomeLength; i++) {
                // TODO replace this with true random genes 
                genome.genes.push(0);
            }
            individ.genome = genome;
            this.totalIndividualsProduced++;
            return individ;
        };
        return IndividualFactory;
    }());
    exports.IndividualFactory = IndividualFactory;
});
define("main", ["require", "exports", "individual/individual", "individual/individualFactory", "genome/genome"], function (require, exports, individual_2, individualFactory_1, genome_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Individual = individual_2.Individual;
    exports.IndividualFactory = individualFactory_1.IndividualFactory;
    exports.Genome = genome_3.Genome;
});
//# sourceMappingURL=main.js.map