---
tag: BF95BNFC8Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h614642
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Let $p=2^{16}+1$ be a prime. A sequence of $2^{16}$ positive integers $\{a_n\}$ is *monotonically bounded* if $1\leq a_i\leq i$ for all $1\leq i\leq 2^{16}$ . We say that a term $a_k$ in the sequence with $2\leq k\leq 2^{16}-1$ is a *mountain* if $a_k$ is greater than both $a_{k-1}$ and $a_{k+1}$ . Evan writes out all possible monotonically bounded sequences. Let $N$ be the total number of mountain terms over all such sequences he writes. Find the remainder when $N$ is divided by $p$ .

*Proposed by Michael Ren*
