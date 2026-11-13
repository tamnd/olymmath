---
tag: TAMAKVVADH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be an $n$-element set, and let the number of permutations of $S$ in which exactly $k$ elements are fixed be denoted by $P_{n}(k)$. Prove that
$$
\sum_{k=0}^{n}(k-1)^{2} P_{n}(k)=n!.
$$
