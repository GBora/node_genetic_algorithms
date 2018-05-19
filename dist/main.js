define("individual/individual", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Individual = /** @class */ (function () {
        function Individual() {
            this.id = "0";
            this.alleles = [];
            this.fitness = 0;
            this.generation = 0;
        }
        return Individual;
    }());
    exports.Individual = Individual;
    ;
});
define("genotype/gene", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gene = /** @class */ (function () {
        function Gene() {
            this.id = "gene";
            this.alleleOptions = [];
        }
        Object.defineProperty(Gene.prototype, "newRandomAllele", {
            get: function () {
                var index = Math.floor(Math.random() * this.alleleOptions.length) + 1;
                return this.alleleOptions[index];
            },
            enumerable: true,
            configurable: true
        });
        return Gene;
    }());
    exports.Gene = Gene;
});
define("genotype/genotype", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Genotype = /** @class */ (function () {
        function Genotype() {
            this.genes = [];
        }
        return Genotype;
    }());
    exports.Genotype = Genotype;
});
define("individual/individualFactory", ["require", "exports", "individual/individual"], function (require, exports, individual_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("main", ["require", "exports", "individual/individual", "individual/individualFactory", "genotype/genotype", "genotype/gene"], function (require, exports, individual_2, individualFactory_1, genotype_1, gene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Individual = individual_2.Individual;
    exports.IndividualFactory = individualFactory_1.IndividualFactory;
    exports.Genotype = genotype_1.Genotype;
    exports.Gene = gene_1.Gene;
});
//# sourceMappingURL=main.js.map