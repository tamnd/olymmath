---
tag: 6NSF9S5T9W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=157587
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The weight $w(p)$ of a polynomial $p, p(x)=\sum_{i=0}^{n} a_{i} x^{i}$, with integer coefficients $a_{i}$ is defined as the number of its odd coefficients. For $i=0,1,2, \ldots$. let $q_{i}(x)=(1+x)^{i}$. Prove that for any finite sequence $0 \leq i_{1}<i_{2}<\cdots<$ $i_{n}$ the inequality
$$
w\left(q_{i_{1}}+\cdots+q_{i_{n}}\right) \geq w\left(q_{i_{1}}\right)
$$
holds.
