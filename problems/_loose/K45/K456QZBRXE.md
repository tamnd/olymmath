---
tag: K456QZBRXE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of natural numbers $a, b$ for which the set equality holds

$$
\{a \cdot[a, b], b \cdot(a, b)\}=\{45,180\}
$$

where $(x, y)$ and $[x, y]$ denote the greatest common divisor and the least common multiple of numbers $x$ and $y$, respectively.
