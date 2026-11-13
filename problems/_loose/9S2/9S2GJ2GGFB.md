---
tag: 9S2GJ2GGFB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{f_n\}_{n\ge 1}$ be the Fibonacci sequence, defined by $f_1 = f_2 = 1$, and for all positive integers $n$, $f_{n+2} = f_{n+1} + f_n$. Prove that the following inequality takes place for all positive integers $n$:
$${n \choose 1}f_1 +{n \choose 2}f_2+... +{n \choose n}f_n < \frac{(2n + 2)^n}{n!}$$
.
