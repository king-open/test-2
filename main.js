/* 不要使用class 写一个构造函数
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sayHi = function () {
    console.log("你好, 我叫", this.name)
}
*/

// 请用 class 再实现一次上面的功能

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log("你好，我叫", this.name)
    }
}