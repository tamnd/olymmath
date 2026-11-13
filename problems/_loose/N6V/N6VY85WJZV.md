---
tag: N6VY85WJZV
kind: problem
type: answer
answer: '{\begin{pmatrix}1,0\\0,z\neq-i,\quadz\neq0\\2021,-i\end{pmatrix}.}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the complex number $z$, for which $z^{2020}|z|+\bar{z} i=0$. Determine the set of values of the expression

$$
E=z^{2020}-z^{2019} i+\cdots+(-1)^{k} z^{2020-k} i^{k}+\cdots+z i+1
$$
