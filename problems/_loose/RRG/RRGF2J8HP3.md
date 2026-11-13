---
tag: RRGF2J8HP3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
Let $k$ be a positive integer and let $x_0, x_1, x_2, \dots$ be an infinite sequence defined by the relationship
$$
\begin{align*}
x_0 &= 0 \\
x_1 &= 1 \\
x_{n+1} &= kx_n + x_{n-1} \text{for all } n \ge 1.
\end{align*}
$$

a. For the special case $k = 1$, prove that $x_{n-1}x_{n+1}$ is never a perfect square for $n \ge 2$.

b. For the general case of integers $k \ge 1$, prove that $x_{n-1}x_{n+1}$ is never a perfect square for $n \ge 2$.
