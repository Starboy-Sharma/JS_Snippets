const parent = function() {
  this.parent = "Parent";
}

// Define parent methods and properties
parent.prototype.nature = 'Nature has trees.';
parent.prototype.moretree = function() {
  console.log('Let\'s build more trees');
}

const child = Object.create(parent.prototype);

child.fields = function() {
  console.log('Fields are green');
}

console.log(child.nature)
console.log(child.moretree());


/**
 * We need to call Object.create in one of following ways for the prototype methods to be inherited:
    Object.create(Parent.prototype);
    Object.create(new Parent(null));
    Object.create(objLiteral);
    Currently, child.constructor is pointing to the Parent: 
 */
