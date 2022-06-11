class ObjectArray extends Array {
    constructor(...args) { 
        super(...args); 
    }

    isActive() {
        return this.filter(item => item.active);
    }
}

module.exports.objectArray = (array) => {
    return Object.assign(new ObjectArray(), array);
};