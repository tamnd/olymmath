---
tag: KXHFEXJF4N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f, g: \mathbf{Z} \rightarrow [0, +\infty)$ be functions that are non-zero at only finitely many integers. Define $h: \mathbf{Z} \rightarrow [0, +\infty)$ by $h(n) = \max \{f(n-k) g(k) \mid k \in \mathbf{Z}\}$. Let $p, q$ be positive real numbers satisfying $\frac{1}{p} + \frac{1}{q} = 1$. Prove:
$$
\sum_{n \in \mathbf{Z}} h(n) \geqslant \left(\sum_{n \in \mathbf{Z}} f^{p}(n)\right)^{\frac{1}{p}} \left(\sum_{n \in \mathbf{Z}} g^{q}(n)\right)^{\frac{1}{q}}.
$$
