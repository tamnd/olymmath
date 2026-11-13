---
tag: FCNSAK00N0
kind: problem
type: answer
answer: u_{n}=\frac{1}{\sqrt{5}}(\frac{1+\sqrt{5}}{2})^{n+1}-\frac{1}{\sqrt{5}}(\frac{1-\sqrt{5}}{2})^{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Gives the array $\mathrm{I}$:
$$
\begin{array}{cccccccccc}
& 1 & 2 & 3 & 4 & \cdots & n-3 & n-2 & n-1 & \\
1 & 2 & 3 & 4 & 5 & \cdots & n-2 & n-1 & n \\
2 & 3 & 4 & 5 & 6 & \cdots & n-1 & n & & (n \geqslant 2),
\end{array}
$$

Select a number from the $k$-th column $(k=1,2, \cdots, n)$, denoted as $a_{k}$. If $a_{1}, a_{2}, \cdots, a_{n}$ are distinct, then the ordered $n$-tuple $\left(a_{1}, a_{2}, \cdots, a_{n}\right)$ is called a system of distinct representatives (SDR) of the array $\mathrm{I}$, and $a_{k}$ is called the representative of the $k$-th column. Let $u_{n}$ denote the number of SDRs of the array $\mathrm{I}$. Find $u_{n}$.
