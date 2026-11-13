---
tag: G33Z6PG9VM
kind: problem
type: answer
answer: '|(\sum_{i=1}^{n}a_{i})\cdot(\sum_{i=1}^{n}b_{i})|<\frac{n^{2}(n+3)^{2}}{24}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
7 Let the real sequences $\left\{a_{n}\right\},\left\{b_{n}\right\}$ satisfy $4 a_{n}^{2}+36 a_{n}^{2} b_{n}^{2}+12 a_{n} b_{n}+9 b_{n}^{2} \leqslant n^{2}$ for any natural number $n$. Prove:
$$
\left|\left(\sum_{i=1}^{n} a_{i}\right) \cdot\left(\sum_{i=1}^{n} b_{i}\right)\right|<\frac{n^{2}(n+3)^{2}}{24} .
$$
