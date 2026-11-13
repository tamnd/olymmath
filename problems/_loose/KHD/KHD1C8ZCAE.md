---
tag: KHD1C8ZCAE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f$ be defined on $\mathbf{R}$ as an increasing function, and it always satisfies $f(x+1)=f(x)+3$. Define:
$$
f^{(1)}(x)=f(x), f^{(n)}(x)=f\left(f^{(n-1)}(x)\right) \text {. }
$$

Prove:
$$
\begin{array}{l}
\text { (1) } 3 x+f(0)-3 \leqslant f(x) \\
\leqslant 3 x+f(0)+3(x \in \mathbf{R}) ;
\end{array}
$$
(2) For any $x, y \in \mathbf{R}$, we have
$$
\begin{array}{l}
\left|f^{(n)}(x)-f^{(n)}(y)\right| \\
\leqslant 3^{n}(|x-y|+3)\left(n \in \mathbf{Z}_{+}\right)
\end{array}
$$
