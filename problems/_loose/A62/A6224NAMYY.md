---
tag: A6224NAMYY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h2546703
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan TST Round 3
---
Let $n$ be a given positive integer. We say that a positive integer $m$ is *$n$ -good* if and only if there are at most $2n$ distinct primes $p$ satisfying $p^2\mid m$ .

(a) Show that if two positive integers $a,b$ are coprime, then there exist positive integers $x,y$ so that $ax^n+by^n$ is $n$ -good.

(b) Show that for any $k$ positive integers $a_1,\ldots,a_k$ satisfying $\gcd(a_1,\ldots,a_k)=1$ , there exist positive integers $x_1,\ldots,x_k$ so that $a_1x_1^n+a_2x_2^n+\cdots+a_kx_k^n$ is $n$ -good.

(Remark: $a_1,\ldots,a_k$ are not necessarily pairwise distinct)

*Proposed by usjl.*
