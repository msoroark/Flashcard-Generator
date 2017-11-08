//Constructor for cloze card. 
var ClozeCard = function(text, cloze) {
    this.fullText = text;
    this.partial = text.replace(cloze, '...')
    this.cloze = cloze;


}

module.exports = ClozeCard;