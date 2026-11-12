---
tag: KTK4W88C4F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f$ be differentiable at the point $x_{0}$, and the function $g$ be differentiable at the point $y_{0}=f\left(x_{0}\right)$. Suppose that the point $x_{0}$ has a neighborhood $U\left(x_{0}\right)$ such that if $x$ belongs to $U\left(x_{0}\right)$ and $x \neq x_{0}$, then $f(x) \neq f\left(x_{0}\right)$. Prove that the function $g \circ f$ is differentiable at the point $x_{0}$ and $(g \circ f)^{\prime}\left(x_{0}\right)=g^{\prime}\left[f\left(x_{0}\right)\right] f^{\prime}\left(x_{0}\right)$.

- Let the function $f(x)$ be monotonically increasing on the interval $[a, b]$. Then to each point $y$ of the interval $[f(a), f(b)]$ there corresponds a unique point $x$ of the interval $[a, b]$ such that $y=f(x)$. Therefore, one can define the inverse function $g(y)=x$.
