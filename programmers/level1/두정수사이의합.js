function solution(a, b) {
    var s;
    var e;
    if (a > b){
        e = a;
        s = b;
    } else {
        e = b;
        s = a;
    }
    
    var answer = 0;
    
    for(var i=s; i<=e; i++) {
        answer += i;
    }
    
    
    return answer;
}