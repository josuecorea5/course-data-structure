class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length--;
    return this.data;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unshift(index){
    const newItem = this.data[index];
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = index;
    this.length++;
    return this.data[0];
  }
  shift(){
    return this.delete(0);
  }
}

const myArray = new MyArray;
myArray.push('Diego');
myArray.push('Alirio');
myArray.push('Josue');
myArray.push('David');
myArray.push('Maritza');
// myArray.delete(1);