---
tag: FJ2RBH4DXX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=67790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the polynomial $P(x)=a_{0}+a_{1} x+\ldots+a_{n} x^{n}$ has the number -1 as a root of multiplicity $m+1$ if and only if the following conditions are satisfied:

$$
\begin{aligned}
& a_{0}-a_{1}+a_{2}-a_{3}+\ldots+(-1)^{n} a_{n}=0 \\
& -a_{1}+2 a_{2}-3 a_{3}+\ldots+(-1)^{n} n a_{n}=0 \\
& \ldots \\
& -a_{1}+2^{m} a_{2}-3^{m} a_{3}+\ldots+(-1)^{n} n^{m} a_{n}=0
\end{aligned}
$$
