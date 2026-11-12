---
tag: C7ZXKAS4MM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1276851
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Taiwan TST Round 3
---
Let $k$ be a positive integer. A sequence $a_0,a_1,...,a_n,n>0$ of positive integers satisfies the following conditions: $(i)$ $a_0=a_n=1$ ; $(ii)$ $2\leq a_i\leq k$ for each $i=1,2,...,n-1$ ; $(iii)$ For each $j=2,3,...,k$ , the number $j$ appears $\phi(j)$ times in the sequence $a_0,a_1,...,a_n$ , where $\phi(j)$ is the number of positive integers that do not exceed $j$ and are coprime to $j$ ; $(iv)$ For any $i=1,2,...,n-1$ , $\gcd(a_i,a_{i-1})=1=\gcd(a_i,a_{i+1})$ , and $a_i$ divides $a_{i-1}+a_{i+1}$ .
Suppose there is another sequence $b_0,b_1,...,b_n$ of integers such that $\frac{b_{i+1}}{a_{i+1}}>\frac{b_i}{a_i}$ for all $i=0,1,...,n-1$ . Find the minimum value of $b_n-b_0$ .
