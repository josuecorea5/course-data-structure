class HashTable{
  constructor(size){
      this.data = new Array(size);
  }
  //hash function
  hashMethod(key){
      let hash = 0;
      for(let i = 0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i)*i) % this.data.length;
      }
      return hash;
  }
  set(key, value) {  
    const address = this.hashMethod(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    // espacios o buckets que tienen valores
    //al estar en el mismo; se comportan como otro array
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  delete(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          currentBucket.splice(i,1);
          // elimina su valor pero en su lugar queda  undefined
          delete currentBucket[i];
          return true;
        }
      }
    }
    return false;
  }
  getKeys() {
    const key = []
    this.data.map(element => {
      element.map((pairKey) => {
        key.push(pairKey[0])
      })
    })
    return key
  }
}
//50 buckets
const myHashTable = new HashTable(50);

myHashTable.set('Diego',1990);
myHashTable.set('Mariana',1998);
// myHashTable.delete('Diego');
// myHashTable.delete('Mariana');
