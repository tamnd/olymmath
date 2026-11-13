---
tag: T1RWCCFMDD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{i} \in \mathbf{R}^{+}(i=1,2, \cdots, n), k \geqslant 1$, prove:
$$
\left(\frac{a_{1}}{a_{2}+\cdots+a_{n}}\right)^{k}+\left(\frac{a_{2}}{a_{1}+a_{3}+\cdots+a_{n}}\right)^{k}+\cdots+\left(\frac{a_{n}}{a_{1}+a_{2}+\cdots+a_{n-1}}\right)^{k} \geqslant \frac{n}{(n-1)^{k}}
$$
