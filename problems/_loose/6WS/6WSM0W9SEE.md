---
tag: 6WSM0W9SEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a given convex function defined in the interval $0 \leq x \leq 1$ (i.e., for $f(x)$, the inequality

$$
f\left(\lambda x_{1}+(1-\lambda) x_{2}\right) \leq \lambda f\left(x_{1}\right)+(1-\lambda) \cdot f\left(x_{2}\right)
$$

holds for all $0 \leq x_{1} < x_{2} \leq 1$ and $0 \leq \lambda \leq 1$). Determine the geometric locus of points $P(u, v)$ in the plane for which the system of equations

$$
f\left(\sin ^{2} x\right)+f\left(\cos ^{2} y\right)=u
$$

$$
\sin ^{2} x+\cos ^{2} y=v
$$

has a solution.
