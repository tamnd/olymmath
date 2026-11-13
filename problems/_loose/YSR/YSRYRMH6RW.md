---
tag: YSRYRMH6RW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$, and $\{x\}=x-[x]$. Do there exist positive integers $m, n$ and $n+1$ real numbers $x_{0}, x_{1}, \cdots, x_{n}$, such that:
$$
\begin{array}{l}
x_{0}=428, x_{n}=1928, \\
\frac{x_{k+1}}{10}=\left[\frac{x_{k}}{10}\right]+m+\left\{\frac{x_{k}}{5}\right\}(k=0,1, \cdots, n-1)
\end{array}
$$

holds? Prove your conclusion.
