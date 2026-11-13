---
tag: CNZFVMYMWG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264513
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For non-negative integer $n$, the function $f$ is given by
$$f(x)=\begin{cases}
\frac{x}{2} & \text{if $n$ is even} \\
x-1 & \text{if $n$ is odd.}
\end{cases}
$$
Furthermore, let $h(n)$ be the smallest $k$ for which $f^k(n)=0$. Compute
$$\sum_{n=1}^{1024} h(n).$$
