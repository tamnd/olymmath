---
tag: Z3KV5VTJYK
kind: solution
problem: X47A393YVZ
origin: human
author:
  display: nonuser
source: mathse
url: https://math.stackexchange.com/a/3944477
zone: Z1
lang: en
complete: false
---
If we continue from here: $\;\;\;xyz+12 \mid x+y+z-41\;\;\;$ or $\;\;\;xyz+12|x+y+z+49$. 

We can assume $x\leq y\leq z$. We see that $x,y,z\notin \{0,2,3,4,6,8,9\}$ since $xyz+12$ is prime.

 - If $x>1$ then $x,y\geq 5$ and so $xyz+12\geq 25z+12$ so in
   - first case: $$25z+1\leq |x+y+z-41|\leq 3z+41\implies z\le 1$$ and thus no solution.

   - second case: $$25z+1\leq x+y+z+49\leq 3z+49\implies z\leq 2$$ so no solution again. 

 - If $x=1$ then  $\;\;\;yz+12 \mid y+z-40\;\;\;$ or $\;\;\;yz+12|y+z+50$.

   - If $y\neq 1$ then $y\geq 5$. In first case we have $5z+12\leq 2z+40\implies z\leq 9$ so $z=7$ (and $y=5$ or $y=7$) or $z=5$ (and $y=5$). None works. In second case we have $5z+12\leq 2z+50\implies z\leq 12$. So $z\in\{11,7,5\}$ but none works.
   - If $y=1$ then $\;\;\;z+12 \mid z-39\;\;\;$ then $z+12\mid 51 \implies z=5$ or $\;\;\;z+12|z+51$, then $z+12\mid 39$ so $z=1$. 

- If $x=-1$ then we proccede similary like in a previous case...
