---
tag: 2C271JTCFJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
17 Given $G=1+2 x+3 x^{2}+\cdots+(n+1) x^{n}+\cdots$,
Prove: (1) $G^{2}=(1-x)+\sum_{n=0}^{\infty}\binom{n+3}{3} x^{n}$
(2) $G^{2}=\sum_{n=2} a_{n} x^{n}$, where $a_{n}=\sum_{k=0}^{n}(k+1)(n+1-k)$
(3) $a_{n}=\binom{n+3}{3}, n \in\{0,1,2, \cdots\}$
