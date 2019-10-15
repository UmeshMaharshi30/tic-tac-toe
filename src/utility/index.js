export const Array2D = (r, c, fill) => Array.apply(null, new Array(r)).map(function() {return Array.apply(null, new Array(c)).map(function() {return fill})});

const utility = {};

export default utility;