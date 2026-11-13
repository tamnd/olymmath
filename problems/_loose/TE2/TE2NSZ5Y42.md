---
tag: TE2NSZ5Y42
kind: problem
type: answer
answer: 2^{\frac{n^{2}+n-2}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{n}=2^{n} a_{n-1}(n>1)$, and $a_{1}=1$, the general term formula of the sequence $a_{n}=$ ( ).
A. $2^{\frac{n(n-1)}{2}}$
B. $2^{\frac{n(n+1)}{2}}$
C. $2^{\frac{n^{2}+n-2}{2}}$
D. $2^{\frac{n^{2}-n+2}{2}}$
