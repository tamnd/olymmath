---
tag: 69HGCDRK2B
kind: problem
type: answer
answer: f(,n)=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6-139 Find a function $f(m, n)$ that satisfies the following conditions: for every pair of non-negative integers $m, n$,
(1) $2 f(m, n)=2+f(m+1, n-1)+f(m-1, n+1)$,
$(m \geqslant 1, n \geqslant 1)$
(2) $f(m, 0)=f(0, n)=0$.
