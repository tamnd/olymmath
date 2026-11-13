---
tag: Z8HHZZ35T7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the following three quadratic equations:

$$
\begin{aligned}
& x^{2}-a_{1} x+b_{1}=0 \ldots \\
& x^{2}-a_{2} x+b_{2}=0 \ldots \\
& x^{2}-a_{3} x+b_{3}=0 \ldots
\end{aligned}
$$

Each pair of these equations has a common root, but there is no common root for all three. To prove that this occurs, the necessary and sufficient conditions are:

$$
b_{1}=\left(A-a_{2}\right)\left(A-a_{3}\right), b_{2}=\left(A-a_{3}\right)\left(A-a_{1}\right), b_{3}=\left(A-a_{1}\right)\left(A-a_{2}\right)
$$

where

$$
A=\frac{1}{2}\left(a_{1}+a_{2}+a_{3}\right)
$$
