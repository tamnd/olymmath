---
tag: FDS8AB3EQR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove:
$$
\sum_{A_{1}, \cdots, A_{k}}\left|A_{1} \cup A_{2} \cup \cdots \cup A_{k}\right|=n\left(2^{k}-1\right) 2^{k(n-1)} .
$$

Here the summation is over all subsets $A_{1}, A_{2}, \cdots, A_{k}$ of an $n$-element set $X$, where empty sets and identical sets are allowed, and the order is taken into account (i.e., if $A_{1} \neq A_{2}$, then $A_{1} \cup A_{2}$ and $A_{2} \cup A_{1}$ are considered different).
