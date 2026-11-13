---
tag: DGGAX45Y6R
kind: problem
type: answer
answer: \frac{(n+1)!}{2^{n-1}}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134942
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy $a_{1}=a_{2}=1$, and $a_{n+1} a_{n-1}=a_{n}^{2}+n a_{n} a_{n-1}(n=2,3, \cdots)$.
(1) Find the general term formula for $\left\{a_{n}\right\}$;
(2) Find $\sum_{k=2}^{n} \frac{a_{k}}{(k-2) \text { ! }}$.
