---
tag: P1MHP18W9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the function $f(x)$ defined on $D\left(\subseteq \mathbf{R}^{+}\right)$, and for any $x_{1} 、 x_{2} \in D$, the following conditions always hold:
$$
\begin{array}{c}
f\left(\sqrt{x_{1} x_{2}}\right) \leqslant \sqrt{f\left(x_{1}\right) f\left(x_{2}\right)}, \\
f^{2}\left(x_{1}\right)+f^{2}\left(x_{2}\right) \geqslant 2 f^{2}\left(\sqrt{\frac{x_{1}^{2}+x_{2}^{2}}{2}}\right) .
\end{array}
$$

Prove: $f\left(x_{1}\right)+f\left(x_{2}\right) \geqslant 2 f\left(\frac{x_{1}+x_{2}}{2}\right)$.
