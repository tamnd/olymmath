---
tag: MGYB4RPGTD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(SRP, 78). Non-constant functions $f(n, m)$ defined on the set of all pairs of integers, taking integer values and satisfying the identity

$$
\begin{aligned}
& f(n, m) \equiv \frac{1}{4}(f(n-1, m)+f(n+1, m)+f(n, m-1)+ \\
& +f(n, m+1))
\end{aligned}
$$

$n, m \in \mathbf{Z}$. Prove that: a) such functions exist; b) for any value $k \in \mathbf{Z}$, each such function takes values both greater than $k$ and less than $k$.
