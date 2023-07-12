function factorial(n)
{
    var fact = n;
    for (var i=0; i<=n; i++)
    {
        fact = fact * (n-1);
        n--;        
    };
    
    return fact;
}

console.log(factorial(5));