---
tag: WDZJQWZDM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{i} \in \mathrm{R}, a_{i}, b_{i} \in Z^{+}(i=1,2, \cdots, n)$, let $a=$
$$
\frac{a_{1} x_{1}+a_{2} x_{2}+\cdots+a_{n} x_{n}}{a_{1}+a_{2}+\cdots+a_{n}}, b=\frac{b_{1} x_{1}+b_{2} x_{2}+\cdots+b_{n} x_{n}}{b_{1}+b_{2}+\cdots+b_{n}} \text {. }
$$

Prove: Among $x_{1}, x_{2}, \cdots, x_{n}$, there must exist two numbers $x_{p}$ and $x_{q}$, satisfying
$$
|a-b| \leqslant\left|a-x_{p}\right| \leqslant\left|x_{q}-x_{p}\right| .
$$
