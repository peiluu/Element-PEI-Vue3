import { observe } from './observe';

let obj = {
  a: {
    c: []
  },
  b: [],
}
observe(obj)
obj.a.c.push(1, 2)
obj.b[2] = 1
console.log(obj)