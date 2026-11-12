---
tag: ARGRX4RQ0M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3729015
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2025
    source: hf-ai-mo-aops
    label: 2025 Stanford Mathematics Tournament
---
**p1**
Carolina has a jar of red, green, and white jelly beans. She replaces $400$ red beans with green ones, then $200$ green beans with white ones. Initially, the percentage of red beans minus the percentage of green beans was $X\%$ . After the replacements, this difference became $(X-2.5)\%$ . Compute the number of beans in the jar.**p2**
Six friends-Andrea, Blake, Camila, Dean, Ethan, and Francis-drink a combined total of $32$ cups of boba. Each person drinks at least one cup, no two friends drink the same number of cups, and each cup is fully finished by a single person. One friend, known as the "Boba Champion", drinks as many cups as all the others combined. Compute the product of the number of cups of boba consumed by the five friends who aren't the Boba Champion.**p3**
The absolute values of all three roots of the polynomial $x^3-147x+c$ are primes. Compute $|c|$ . (A prime number is a positive integer greater than $1$ whose only positive divisors are $1$ and itself.)**p4**
Compute the sum of the real roots of $\left(x^2+16x+48\right)\left(x^2+24x+128\right)=44^{2^{2025}}$ . (Roots are counted with multiplicity.)**p5**
Given real numbers $s$ , $m$ , and $t$ such that $s^2+m^2+t^2=8$ , $s^3+m^3+t^3=11$ , and $s^4+m^4+t^4=25$ , compute the value of $(s+m+t)(s+m-t)(s-m+t)(s-m-t)$ .**p6**
Compute the number of integers between $1$ and $2025$ inclusive that *cannot* be represented as $x\left(\lceil x\rceil +\lfloor x\rfloor\right)$ for any positive real number $x$ .**p7**
The Fibonacci numbers are defined by $F_1=F_2=1$ and $F_n=F_{n-1}+F_{n-2}$ for all positive integers $n\geq 3$ . Let $S=\left\{2^{F_2},2^{F_3},\dots,2^{F_{27}},2^{F_{28}}\right\}=\left\{2,4,\dots,2^{196418},2^{317811}\right\}$ be a set. If $$ P=\prod_{x\in S}\prod_{y\in S}x^{\log_3 y} $$ is the product of $x^{\log_3 y}$ across all ordered pairs of elements $(x,y)$ in $S$ , including when $x=y$ , compute $\sqrt{\log_2P}$ .**p8**
Let $Z$ be the set of all complex numbers $z$ such that $|z|=1$ and $$ z^8+iz^6-(1+i)z^5+(1-i)z^3+iz^2-1=0, $$ with the polar angle $\theta_z$ (the angle in $[0,2\pi)$ that $z$ makes with the positive real axis, measured counterclockwise) lying in the interval $[0,\pi)$ . Compute the sum of all distinct values of $\theta_z$ for $z$ in $Z$ .**p9**
Define a sequence $\{a_n\}$ by $a_1=5$ and $a_{n+1}=\frac{5a_n+\sqrt{21a_n^2+4}}{2}$ for $n\geq 1$ . Compute the value of $$ \sum^{\infty}_{n=1}\frac{1}{a_na_{n+1}}. $$ **p10**
Let $f(x)=4x+a$ , $g(x)=6x+b$ , and $h(x)=9x+c$ . Let $S(a,b,c)$ be the set of the $3^{20}$ functions formed by all possible compositions of $f,g,h$ a total of $20$ times, and let $R(a,b,c)$ be the number of distinct roots over all functions in $S(a,b,c)$ . Compute the *second smallest* possible value of $R(a,b,c)$ as $a,b,c$ range over all reals.**Tiebreaker**
*This is an estimation question used for tiebreaking purposes. Ties on this test will be broken by absolute distance from the correct answer on this problem.* Let $$ A=\sum^{5000^2-1}_{k=0}\frac{1}{k-4999\left\lfloor\frac{k}{5000}\right\rfloor+1}. $$ Estimate $A$ in the decimal form $abcdef.ghij$ where $a,b,c,d,e,f,g,h,i,j$ are decimal digits each between $0$ and $9$ , inclusive (leading zeros are possible).
