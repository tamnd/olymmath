---
tag: NPY3MBGEV5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123718
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove:
$$
\begin{aligned}
\sum_{k=1}^{n}(-1)^{k-1}\binom{n}{k} \underbrace{\left(1+\frac{1}{2}+\frac{1}{3}+\cdots+\frac{1}{k}\right)}_{\text {ak }}=\frac{1}{n} \\
(n \geqslant 1) .
\end{aligned}
$$
