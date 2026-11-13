---
tag: W01RM2QXDW
kind: problem
type: answer
answer: (\sin\frac{\pi}{n}+\frac{1}{\sin\frac{\pi}{n}})^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geqslant 2, x_{1}, x_{2}, \cdots, x_{n} \in \mathbf{R}^{+}$ and $x_{1}+x_{2}+\cdots+x_{n}=\pi$, find the minimum value of $\left(\sin x_{1}+\frac{1}{\sin x_{1}}\right)\left(\sin x_{2}+\frac{1}{\sin x_{2}}\right) \cdots\left(\sin x_{n}+\frac{1}{\sin x_{n}}\right)$.
