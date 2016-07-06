export function makeArray(lengths, Type) {
    if (!Type) Type = Float32Array;
    
    if (lengths.length === 1) {
        return new Type(lengths[0]);
    }
    
    var ret = [],
        len = lengths[0];
        
    for (var j = 0; j < len; j++) {
        ret[j] = makeArray(lengths.slice(1), Type);
    }
    
    return ret;
}