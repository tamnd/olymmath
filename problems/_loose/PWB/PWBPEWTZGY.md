---
tag: PWBPEWTZGY
kind: problem
type: answer
answer: '{\begin{pmatrix}\frac{n(n-2)}{4},n\text{iseven,}\\(\frac{n-1}{2})^{2},n\text{isodd.}\end{pmatrix}.}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
7・62. From $\{1,2, \cdots, n\}$, select triples $(a, b, c), a<b<c$ and for any two selected triples $(a, b, c)$ and $\left(a^{\prime}, b^{\prime}, c^{\prime}\right)$, the equation $a=a^{\prime}, b=$ $b^{\prime}, c=c^{\prime}$ holds for at most 1. What is the maximum number of such triples that can be selected?
