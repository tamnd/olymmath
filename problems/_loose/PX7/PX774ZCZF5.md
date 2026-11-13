---
tag: PX774ZCZF5
kind: problem
type: answer
answer: a_{n}=2^{3n-2}+2^{n+1}-4,b_{n}=2^{3n-2}-2^{n+1}+3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequences $\left\{a_{n}\right\},\left\{b_{n}\right\}$ satisfy $a_{1}=2, b_{1}=1,\left\{\begin{array}{l}a_{n+1}=5 a_{n}+3 b_{n}+7 \\ b_{n+1}=3 a_{n}+5 b_{n}\end{array} \left(n \in \mathbf{N}^{*}\right)\right.$, then their general terms are $a_{n}=$ $ $ $b_{n}=$ $ $ .
