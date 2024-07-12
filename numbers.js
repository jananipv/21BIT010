const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
let numbers = [2,4,6,7,12,33,9,17,66,89,90,10];
app.get('/numbers/:x', (req, res) => {
  const x = req.params.x;
  var a=[];
  var j=0;
  if(x==='e')
  {
    for(var i=0;i<numbers.length;i++){
        if(numbers[i]%2 == 0)
        {
            a[j]=numbers[i];
            j=j+1;
        }
    }
    var sum=0;
    for(var i=0;i<a.length;i++)
    {
        sum=+a[i];
    }
    res.json(a);
  }
  if(x==='p')
    {var k=0;
        for(var i=0;i<numbers.length;i++)
        {
        let isPrime = true;
        if(numbers[i]===2)
            a[k]=numbers[i];
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime === true)
                {  a[k]=numbers[i];
                    k=k+1;
                }   
    }
}      res.json(a);});
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
