---
tag: 6AM3YT1NP3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=52
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : [0, 1] \to \mathbb{R}$ be an integrable function. If $f(1) = 0$ and $f$ is differentiable in $1$, prove that
$$
\lim_{n \to \infty} n^2 \int_0^1 x^n f(x) dx = -f'(1).
$$
