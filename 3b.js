//方法一
for(i=9; i>=2; i--)
    {
        var s = ""
        for(j=2; j<=i; j++)
            {
                s+=(i*j+ " ");
            }

            console.log(s);
    }
 

//方法二
for(i=9; i>=2; i--)
    {
        for(j=2; j<=i;j++)
            {
                process.stdout.write(`${i*j} `);
            }
        console.log("");
    }

