---
tag: XTAG3TG8D4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the function $F(x, y)=\sqrt{x y}$ is concave, the function $\log \left(a^{x}+a^{y}\right)$ is convex, the function $x_{1}^{q_{1}} x_{2}^{q_{2}}$ and generally the function $x_{1}^{q_{1}} x_{2}^{q_{2}} \ldots x_{n}^{q_{n}}$ is concave (where $q_{1}, q_{2}$ and $q_{1}, q_{2}, \ldots, q_{n}$ are given positive numbers such that $q_{1}+q_{2}=1$ and $q_{1}+q_{2}+\ldots+q_{n}=1$, and the variables $x_{1}, x_{2}$ and $x_{1}, x_{2}, \ldots, x_{n}$ can only take positive values).

Prove the inequality

$$
\begin{aligned}
& \left(x_{1}^{(1)}+x_{1}^{(2)}+\ldots+x_{1}^{(k)}\right)^{q_{1}}\left(x_{2}^{(1)}+x_{2}^{(2)}+\ldots+x_{2}^{(k)}\right)^{q_{2}} \ldots \\
& \ldots\left(x_{n}^{(1)}+x_{n}^{(2)}+\ldots+x_{n}^{(k)}\right)^{q_{n}} \geqq x_{1}^{(1) q_{1}} x_{2}^{(1) q_{2}} \ldots x_{n}^{(1) q_{n}}+ \\
& +x_{1}^{(2) q_{1}} x_{2}^{(2) q_{2}} \ldots x_{n}^{(2) q_{n}}+\ldots+x_{1}^{(k) q_{1}} x_{2}^{(k) q_{2}} \ldots x_{n}^{(k) q_{n}}
\end{aligned}
$$
