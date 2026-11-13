---
tag: EDTZCJXD3B
kind: problem
type: answer
answer: 3^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $n$ is a natural number, the polynomial
$$
P(x)=\sum_{h=0}^{n} c_{n}^{h} x^{n-h}(x-1)^{h}
$$

can be expanded into an ascending power series of $x$: $a_{0}+a_{1} x+a_{2} x^{2}+\cdots+a_{n} x^{n}$. Find
$$
\left|a_{0}\right|+\left|a_{1}\right|+\left|a_{2}\right|+\cdots+\left|a_{n}\right|
$$
