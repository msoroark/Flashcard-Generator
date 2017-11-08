//Constructor for cloze card. 
var ClozeCard = function(text, cloze) {
    this.cloze = cloze;
    this.partial = "..." + partial;
    this.fullText = [cloze] + " " + partial;


}

module.exports = ClozeCard;