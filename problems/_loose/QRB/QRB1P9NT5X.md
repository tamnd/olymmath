---
tag: QRB1P9NT5X
kind: problem
type: answer
answer: ^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ be the set of the first 2009 prime numbers and let $X$ be the set of all natural numbers which have only prime factors from $P$. Determine all natural numbers $k$ for which a function $f: X \rightarrow X$ exists which satisfies the following equation for all $m, n \in X$:

$$
f(m f(n))=f(m) n^{k}
$$
