---
tag: P6GPAN6GM8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221928
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
For some positive integer $n$ , consider the usual prime factorization $$n =
\prod_{i=1}^{k} p_{i}^{e_{i}}=p_1^{e_1}p_2^{e_2}\ldots p_k^{e_k},$$ where $k$ is the number of primes factors of $n$ and $p_{i}$ are the prime factors of $n$ . Define $Q(n), R(n)$ by
$$
Q(n) = \prod_{i=1}^{k} p_{i}^{p_{i}} \text{ and } R(n) =
\prod_{i=1}^{k} e_{i}^{e_{i}}.
$$ For how many $1 \leq n \leq 70$ does $R(n)$ divide $Q(n)$ ?
