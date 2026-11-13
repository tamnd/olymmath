---
tag: P406QZBS8W
kind: problem
type: answer
answer: \frac{1}{2} - \frac{1}{2011}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$ we denote by $u(n)$ the largest prime number less than or equal to $n$, and with $v(n)$ the smallest prime number larger than $n$. Prove that $$ \frac 1 {u(2)v(2)} + \frac 1{u(3)v(3)} + \cdots + \frac 1{ u(2010)v(2010)} = \frac 12 - \frac 1{2011}. $$
