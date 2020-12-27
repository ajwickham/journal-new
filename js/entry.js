export default function Entry(titles, body){
    this.titles = [];
    this.body = [];
}
const game1 = new Entry;


Entry.prototype.addEntry = function(title,body) {
    this.titles.push(title);
    this.body.push(body);
};

Entry.prototype.deleteEntry = function(i) {
  this.titles.splice(i,1);
  this.body.splice(i,1);
};
