---
tag: R0A3XS39XT
kind: problem
type: answer
answer: 110\times(2^{10}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140765
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{n}=2^{n}, b_{n}=n(n=1,2,3, \cdots)$, and $A_{n}, B_{n}$ be the sums of the first $n$ terms of the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$, respectively. Let $c_{n}=a_{n} B_{n}+b_{n} A_{n}-a_{n} b_{n}$. Then the sum of the first 10 terms of the sequence $\left\{c_{n}\right\}$ is ( ).
(A) $2^{10}+53$
(B) $2^{11}+53$
(C) $110 \times\left(2^{9}-1\right)$
(D) $110 \times\left(2^{10}-1\right)$
