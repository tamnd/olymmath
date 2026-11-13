---
tag: PD4YSSBN5Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the integer sequence $\left\{a_{n}\right\}$ satisfy:
$$
a_{0}=0, a_{1}=1, a_{n}=2 a_{n-1}+a_{n-2}, n=2,3,4, \cdots
$$

Prove: $2^{k}\left|a_{n} \Leftrightarrow 2^{k}\right| n, k=0,1,2, \cdots$
