---
tag: H2P3Q31KCC
kind: problem
type: answer
answer: f(n) = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Z^+$ be positive integers set. $f:\mathbb{Z^+}\to\mathbb{Z^+}$ is a function and
we show $ f \circ f \circ ...\circ f $ with $f_l$ for all $l\in \mathbb{Z^+}$ where $f$ is repeated $l$ times. Find all $f:\mathbb{Z^+}\to\mathbb{Z^+}$ functions such that $$ (n-1)^{2020}< \prod _{l=1}^{2020} {f_l}(n)< n^{2020}+n^{2019} $$
for all $n\in \mathbb{Z^+}$
