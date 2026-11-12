---
tag: 2AA1AKWRZ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that $\int f(x) d x$ can be calculated as follows. Let $x=\varphi(y)$ be a differentiable function with an inverse function $y=\psi(x)$. Compute $\int f(\varphi(y)) \varphi^{\prime}(y) d y=F(y)$ and set $y=\psi(x)$. Then $F(\psi(x))$ is the desired integral.
