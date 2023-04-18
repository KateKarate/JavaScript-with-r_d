Array.prototype.pow = function(n) {
    return this.map(function(i) {
      return Math.pow(i, n);
    });
  };
  
  Function.prototype.defer = function(s) {
    const defer = this;
    setTimeout(function() {
      defer();
    }, s);
  };
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(arr); 
  
  function power() {
    const result = arr.pow(2).join(', ');
    alert(result);
  }
  
  power.defer(2000);
  