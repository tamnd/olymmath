---
tag: 3Z7YBX07XT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : [-\frac{\pi}{2}, \frac{\pi}{2}] \to \mathbb{R}$ be a twice differentiable function such that
$$
(f''(x) - f(x)) \cdot \operatorname{tg}(x) + 2 \cdot f'(x) \ge 1, \text{for any } x \in (-\frac{\pi}{2}, \frac{\pi}{2}).
$$

$$
\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} f(x) \cdot \sin x dx \geq \pi - 2.
$$
