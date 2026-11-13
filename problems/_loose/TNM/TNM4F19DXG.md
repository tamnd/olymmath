---
tag: TNM4F19DXG
kind: problem
type: answer
answer: (x_{1},x_{2},x_{3},\ldots,x_{n})=(6,6,6,\ldots,6)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n \geq 2$, determine all $n$-tuples $\left(x_{1}, x_{2}, \ldots, x_{n}\right)$ of positive integers $x_{1}, x_{2}, \ldots, x_{n}$ that satisfy the following system of equations:

$$
\begin{aligned}
& x_{1} \cdot x_{2}=3 \cdot\left(x_{1}+x_{2}\right) \\
& x_{2} \cdot x_{3}=3 \cdot\left(x_{2}+x_{3}\right) \\
& \cdots \\
& x_{n-1} \cdot x_{n}=3 \cdot\left(x_{n-1}+x_{n}\right) \\
& x_{n} \cdot x_{1}=3 \cdot\left(x_{n}+x_{1}\right)
\end{aligned}
$$
