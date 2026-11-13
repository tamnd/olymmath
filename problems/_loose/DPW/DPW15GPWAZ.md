---
tag: DPW15GPWAZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b$ be the roots of the quadratic polynomial $Q(x) = x^2 + x + 1$, and let $u, v$ be the roots of the quadratic polynomial $R(x) = 2x^2 + 7x + 1$.
Suppose $P$ is a cubic polynomial which satises the equations
$$\begin{cases}
P(au) = Q(u)R(a) \\
P(bu) = Q(u)R(b) \\
P(av) = Q(v)R(a) \\
P(bv) = Q(v)R(b)
\end{cases}$$
If $M$ and$ N$ are the coeffcients of $x^2$ and $x$ respectively in $P(x)$, what is the value of $M+ N$?
