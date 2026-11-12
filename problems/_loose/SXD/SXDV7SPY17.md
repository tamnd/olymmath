---
tag: SXDV7SPY17
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h410938
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
Let $p(x)$ be a polynomial with integer coefficients such that $p(0)=p(1)=1$ . We define the sequence $a_0, a_1, a_2, \ldots, a_n, \ldots$ that starts with an arbitrary nonzero integer $a_0$ and satisfies $a_{n+1}=p(a_n)$ for all $n \in \mathbb N\cup \{0\}$ . Prove that $\gcd(a_i,a_j)=1$ for all $i,j \in \mathbb N \cup \{0\}$ .
