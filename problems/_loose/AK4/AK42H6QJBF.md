---
tag: AK42H6QJBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Question 4 Let $p$ and $p+2$ both be prime numbers, $p>3$. Define the sequence $\left\{a_{n}\right\}:$
$$
\begin{array}{l}
a_{1}=2, \\
a_{n}=a_{n-1}+\left\lceil\frac{p a_{n-1}}{n}\right\rceil(n=2,3, \cdots),
\end{array}
$$

where $\lceil x\rceil$ denotes the smallest integer not less than the real number $x$. Prove: For $n=3,4, \cdots, p-1$, $n!\left(p a_{n-1}+1\right)$.
