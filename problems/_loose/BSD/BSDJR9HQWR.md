---
tag: BSDJR9HQWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n$-element set $X$, partition $m$ $K$-element subsets of $X$ into $\alpha$ classes, and $m > \frac{(k-1)(n-k)+k}{k^{2}} \mathrm{C}_{n}^{k-1}$, then there must exist a $(k+1)$-element subset of $X$ such that all its $K$-element subsets belong to the $\alpha$ class.
