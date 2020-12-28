export default function Entry(){
  this.titles = [];
  this.body = [];
}



Entry.prototype.addEntry = function(title,body) {
  this.titles.push(title);
  this.body.push(body);
};

Entry.prototype.deleteEntry = function(i) {
  this.titles.splice(i,1);
  this.body.splice(i,1);
};
