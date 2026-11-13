---
tag: YN19VNH62A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive numbers $x_{1}, x_{2}, \cdots, x_{n}$ less than 1, satisfying $x_{1}+x_{2}+\cdots+x_{n}=1$, and $p>0, q \geqslant 1$, $-1<p-q<0$. Prove:
$$
\frac{1}{x_{1}^{p}-x_{1}^{q}}+\frac{1}{x_{2}^{p}-x_{2}^{q}}+\cdots+\frac{1}{x_{n}^{p}-x_{n}^{q}} \geqslant \frac{n^{q+1}}{n^{q-p}-1} .
$$
