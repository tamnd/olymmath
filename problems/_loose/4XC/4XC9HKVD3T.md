---
tag: 4XC9HKVD3T
kind: problem
type: answer
answer: a_{n}=n^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the strictly positive real numbers $a_{1}, a_{2}, \ldots, a_{n}$, with $a_{1}=1$, for which the following equality holds:

$\frac{3}{a_{1} \cdot a_{2}}+\frac{5}{a_{2} \cdot a_{3}}+\frac{7}{a_{3} \cdot a_{4}}+\ldots+\frac{2 n+1}{a_{n} \cdot a_{n+1}}=1-\frac{1}{a_{n+1}},(\forall) n \in \mathbb{N}^{*}$
