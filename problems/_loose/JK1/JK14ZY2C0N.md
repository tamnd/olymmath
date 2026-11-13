---
tag: JK14ZY2C0N
kind: problem
type: answer
answer: n=^{2}+-1orn=^{2}+2-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We denote $[x]$ as the integer part of $x$. For example, $[15 / 4]=3$. We denote $f(n)=\left[\frac{n}{[\sqrt{n}]}\right]$. Find all integers $n$ such that $f(n+1)>f(n)$.
