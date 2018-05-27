"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gene = /** @class */ (function () {
    function Gene() {
        this.id = "gene";
        this.alleleOptions = [];
    }
    Gene.prototype.newRandomAllele = function () {
        var index = Math.floor(Math.random() * this.alleleOptions.length);
        return this.alleleOptions[index];
    };
    return Gene;
}());
exports.Gene = Gene;
//# sourceMappingURL=gene.js.map