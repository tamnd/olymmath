---
tag: AAHVPS6941
kind: problem
type: answer
answer: 2\times4^{n-1}+2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$. For a given positive integer $n$, calculate $\sum_{k=0}^{\left[\frac{n}{2}\right]} \mathrm{C}_{n}^{2 k} 3^{n-2 k}$.
