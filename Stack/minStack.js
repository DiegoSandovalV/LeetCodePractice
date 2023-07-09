var MinStack = function() {
    this.stack = []
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length == 0){
        this.minStack.push(val)
        this.stack.push(val)
    }else{
        this.stack.push(val)
        if(val <= this.minStack[this.minStack.length -1]){
            this.minStack.push(val)
        }
        
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        let temp = this.stack.pop()
        if(temp == this.minStack[this.minStack.length -1]){
            this.minStack.pop()
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length -1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


//test
//input: ["MinStack","push","push","push","getMin","top","pop","getMin"]
//       [[],[-2],[0],[-1],[],[],[],[]]
//expected: [null,null,null,null,-2,-1,null,-2]

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-1)
console.log(obj.getMin())
console.log(obj.top())
obj.pop()
console.log(obj.getMin())
