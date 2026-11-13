---
tag: EJRN65M2GF
kind: problem
type: answer
answer: a_{n}=2^{n}a_{0}(n\in{N})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{a_{n}\right\}(n \geqslant 0)$ be a sequence of positive real numbers, and satisfy
$$
\sum_{k=0}^{n} \mathrm{C}_{n}^{k} a_{k} a_{n-k}=a_{n}^{2} .
$$

Prove: $\left\{a_{n}\right\}$ is a geometric sequence. ${ }^{[4]}$
