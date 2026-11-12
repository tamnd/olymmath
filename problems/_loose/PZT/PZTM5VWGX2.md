---
tag: PZTM5VWGX2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h379753
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2010
    source: hf-ai-mo-aops
    label: 2010 China National Olympiad
---
Let $k$ be an integer $\geq 3$ . Sequence $\{a_n\}$ satisfies that $a_k = 2k$ and for all $n > k$ , we have
$$a_n =
\begin{cases}
a_{n-1}+1 & \text{if } (a_{n-1},n) = 1
2n & \text{if } (a_{n-1},n) > 1
\end{cases}
$$
Prove that there are infinitely many primes in the sequence $\{a_n - a_{n-1}\}$ .
