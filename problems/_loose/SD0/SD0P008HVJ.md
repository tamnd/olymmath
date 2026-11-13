---
tag: SD0P008HVJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n=1,2,3, \ldots$ let

$$
\begin{gathered}
s_{n}=\sum_{k=1}^{n} \frac{1}{k}=1+\frac{1}{2}+\frac{1}{3}+\ldots+\frac{1}{n} \\
t_{n}=\sum_{k=1}^{n} \frac{1}{k \cdot s_{k}^{2}}=\frac{1}{1 \cdot s_{1}^{2}}+\frac{1}{2 \cdot s_{2}^{2}}+\ldots+\frac{1}{n \cdot s_{n}^{2}}
\end{gathered}
$$

Prove for all $n=1,2,3, \ldots$ the inequality $t_{n}<2$.
