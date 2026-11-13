---
tag: J1M1W2MGS9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1885943
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18391
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2019
    source: hf-ai-mo-aops
    label: 2019 South East Mathematical Olympiad
---
For positive integer $x>1$ , define set $S_x$ as $$ S_x=\{p^\alpha|p \textup{ is one of the prime divisor of }x,\alpha \in \mathbb{N},p^\alpha|x,\alpha \equiv v_p(x)(\textup{mod} 2)\}, $$ where $v_p(n)$ is the power of prime divisor $p$ in positive integer $n.$ Let $f(x)$ be the sum of all the elements of $S_x$ when $x>1,$ and $f(1)=1.$ Let $m$ be a given positive integer, and the sequence $a_1,a_2,\cdots,a_n,\cdots$ satisfy that for any positive integer $n>m,$ $a_{n+1}=\max\{ f(a_n),f(a_{n-1}+1),\cdots,f(a_{n-m}+m)\}.$ Prove that
(1)there exists constant $A,B(0<A<1),$ such that when positive integer $x$ has at least two different prime divisors, $f(x)<Ax+B$ holds;
(2)there exists positive integer $Q$ , such that for any positive integer $n,a_n<Q.$
