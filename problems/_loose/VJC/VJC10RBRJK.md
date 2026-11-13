---
tag: VJC10RBRJK
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(x_{n}\right)_{n \geqslant 1}$ of positive real numbers with $\lim _{n \rightarrow \infty} x_{n}=0$. Calculate $\lim _{n \rightarrow \infty} \frac{a_{n}}{n}$, where

$$
a_{n}=\sqrt{2015^{2} x_{1}^{2}+2015 x_{1} x_{2}+x_{2}^{2}}+\sqrt{2015^{2} x_{2}^{2}+2015 x_{2} x_{3}+x_{3}^{2}}+\ldots+\sqrt{2015^{2} x_{n}^{2}+2015 x_{n} x_{1}+x_{1}^{2}}
$$
