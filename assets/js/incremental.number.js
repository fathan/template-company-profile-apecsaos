incrementalNumber = function () {
  var rt = {
    item              : '.incrementalNumber',
    value             : 'data-value',
    bigNumber         : 'big-number',
    setText           : 'set-text',
    setTime           : 'set-time'
  }
  numberTimers = [];
  numberStarts  =  [];

  autoincrementNumber = function(i,where,number) {
    var setTime = where.attr(rt.setTime);
    ( setTime != "" && setTime !== undefined ) ? numberTime = parseInt(setTime) / number : numberTime = 1000 / number ;


    var bigNumber = where.attr(rt.bigNumber);
    ( bigNumber != "" && bigNumber !== undefined ) ? numberStarts[i] = parseInt(bigNumber)  :
     (typeof bigNumber !== typeof undefined && bigNumber !== false) ? numberStarts[i] = Math.round(number - (number/10)) :
      numberStarts[i] = 0 ;

    var setText = where.attr(rt.setText);

    numberTimers[i] = setInterval(function(){
     numberStarts[i]++
     (numberStarts[i] <= number) ? where.html( (setText !== undefined ) ? numberStarts[i]+setText :  numberStarts[i] ) : clearInterval(numberTimers[i])
    },numberTime);
  }

  $.each($(rt.item), function( index, value ) {
    data     = $(this).attr(rt.value);
    autoincrementNumber(numberTimers.length,$(this),data);
  });



}
