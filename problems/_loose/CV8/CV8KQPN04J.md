---
tag: CV8KQPN04J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all differentiable functions $f: [0, \infty) \to \mathbb{R}$, $f(0) = 0$, so that:

i) $f'$ is strictly positive and increasing;

ii) $\int_0^1 (f'(x))^2 dx \ge f(x+f(x))-f(x)$, for every $x \in [0, \infty)$.
