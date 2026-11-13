---
tag: 3KTCRTVN8Z
kind: problem
type: answer
answer: \binom{k+\ell}{k}p^{k}q^{\ell+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In Vívás, the one who reaches 15 hits first wins the bout. Suppose in the competition between $A$ and $B$ (at any point within the bout), $A$ scores the next hit with probability $p$, and $B$ with probability $q=1-p$. (They never score a hit simultaneously.)

Assume that in a bout, $A$ has already scored $14-k$ hits, and $B$ has scored $14-\ell$ hits (where $k$ and $\ell$ are non-negative integers less than 15), and $A$ scores another hit. By how much has this increased the probability that $A$ will ultimately win the bout?
