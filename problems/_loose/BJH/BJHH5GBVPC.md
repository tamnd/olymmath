---
tag: BJHH5GBVPC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive real numbers $a_{1}, a_{2}, \cdots, a_{2017}$ satisfy
$$
x_{k-1}-2 x_{k}+x_{k+1}+a_{k} x_{k}=0(1 \leqslant k \leqslant 2017)
$$

There is a set of real number solutions $\left(x_{0}, x_{1}, \cdots, x_{2018}\right)$, not all zero, and $x_{0}=x_{2018}=0$. Prove:
$$
a_{1}+a_{2}+\cdots+a_{2017} \geqslant \frac{2}{1009} .
$$
