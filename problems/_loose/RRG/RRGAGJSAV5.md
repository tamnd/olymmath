---
tag: RRGAGJSAV5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the real function $f(x)$ have the domain $x \in(a, b)$, and let real numbers $P_{i}>0(1 \leqslant i \leqslant n), n \in \mathbf{N}$.

Denote $\lambda_{n}=\sum_{i=1}^{n} P_{i}, A_{n}=\sum_{i=1}^{n} P_{i} x_{i} / \lambda_{n}, B_{n}=\sum_{i=1}^{n} P_{i} f\left(x_{i}\right) / \lambda_{n}$.
If $f(x)$ is a convex function on the interval $(a, b)$, then $\varphi(n)=\lambda_{n}\left[f\left(A_{n}\right)-B_{n}\right]$ is an increasing function of $n$.
