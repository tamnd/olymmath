---
tag: 97F7QDVRV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3501200
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35738
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2001
    source: hf-ai-mo-aops
    label: 2001 China Team Selection Test
---
Let $X$ be a finite set of real numbers. For any $x,x' \in X$ with $x<x'$ , define a function $f(x,x')$ , then $f$ is called an ordered pair function on $X$ . For any given ordered pair function $f$ on $X$ , if there exist elements $x_1 <x_2 <\cdots<x_k$ in $X$ such that $f(x_1 ,x_2 ) \le f(x_2 ,x_3 ) \le \cdots \le f(x_{k-1} ,x_k )$ , then $x_1 ,x_2 ,\cdots,x_k$ is called an $f$ -ascending sequence of length $k$ in $X$ . Similarly, define an $f$ -descending sequence of length $l$ in $X$ . For integers $k,l \ge 3$ , let $h(k,l)$ denote the smallest positive integer such that for any set $X$ of $s$ real numbers and any ordered pair function $f$ on $X$ , there either exists an $f$ -ascending sequence of length $k$ in $X$ or an $f$ -descending sequence of length $l$ in $X$ if $s \ge h(k,l)$ .
Prove:
1.For $k,l>3,h(k,l) \le h(k-1,l)+h(k,l-1)-1$ ;
2. $h(k,l) \le \binom{l-2}{k+l-4} +1$ .
