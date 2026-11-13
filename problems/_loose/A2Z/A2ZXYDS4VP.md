---
tag: A2ZXYDS4VP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=144897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all positive integers $n$, prove that

$$
\sum_{k=1}^{n} \phi(k)\left\lfloor\frac{n}{k}\right\rfloor=\frac{n(n+1)}{2}
$$

(For a positive integer $n, \phi(n)$ denotes the number of positive integers less than or equal to $n$ and relatively prime to $n$. For a real number $x,\lfloor x\rfloor$ denotes the greatest integer less than or equal to $x$.)
