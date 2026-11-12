---
tag: 51J3YDAS6A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422729
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78589
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
Let $p = 2017$ be a prime. Given a positive integer $n$ , let $T$ be the set of all $n\times n$ matrices with entries in $\mathbb{Z}/p\mathbb{Z}$ . A function $f:T\rightarrow \mathbb{Z}/p\mathbb{Z}$ is called an $n$ -*determinant* if for every pair $1\le i, j\le n$ with $i\not= j$ , $$f(A) = f(A'),$$ where $A'$ is the matrix obtained by adding the $j$ th row to the $i$ th row.

Let $a_n$ be the number of $n$ -determinants. Over all $n\ge 1$ , how many distinct remainders of $a_n$ are possible when divided by $\dfrac{(p^p - 1)(p^{p - 1} - 1)}{p - 1}$ ?

*Proposed by Ashwin Sah*
