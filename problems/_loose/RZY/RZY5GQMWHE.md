---
tag: RZY5GQMWHE
kind: problem
type: answer
answer: '|f''(x_0)| \geq 2018 f(x_0)^{2018}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose a continuous function $f:[0,1]\to\mathbb{R}$ is differentiable on $(0,1)$ and $f(0)=1$, $f(1)=0$. Then, there exists $0<x_0<1$ such that
$$|f'(x_0)| \geq 2018 f(x_0)^{2018}$$
