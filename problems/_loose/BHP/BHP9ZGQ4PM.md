---
tag: BHP9ZGQ4PM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u\in C^2(\overline D)$, $u=0$ on $\partial D$ where $D$ is the open unit ball in $\mathbb R^3$. Prove that the following inequality holds for all $\varepsilon>0$:
$$\int_D|\nabla u|^2dV\le\varepsilon\int_D(\Delta u)^2dV+\frac1{4\varepsilon}\int_Du^2dV.$$(We recall that $\nabla u$ and $\Delta u$ are the gradient and Laplacian, respectively.)
