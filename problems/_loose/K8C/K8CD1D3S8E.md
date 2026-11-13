---
tag: K8CD1D3S8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=16
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Let $n$ be a non-negative integer, and let $f: [-1, 1] \to \mathbb{R}$ be a twice differentiable function vanishing at the origin. Assuming $f''$ continuous, show that
$$
(2n + 3) \int_{-1}^{1} x^{2n} f(x) dx = f''(c), \text{for some } c \text{ in the closed interval } [-1, 1].
$$
