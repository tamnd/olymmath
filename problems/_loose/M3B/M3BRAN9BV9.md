---
tag: M3BRAN9BV9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104362
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of real numbers $\left\{a_{k}\right\}(k=1,2,3, \cdots)$ with the property: there exists a natural number $n$ such that $a_{1}+a_{2}+\cdots+a_{n}=0, a_{n+k}=a_{k}(k=1,2,3, \cdots)$, prove that there exists a natural number $N$, such that for $k=1,2,3, \cdots$, the inequality $a_{N}+a_{N+1}+\cdots+a_{N+k} \geqslant 0$ holds.
