---
tag: ZWX8Z5X2C9
kind: problem
type: answer
answer: 2 ∫_{(a+b)/2}^b f(x) dx
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b \in \mathbb{R}$, $a < b$, and let $f : [a, b] \to [0, \infty)$ be a continuous nondecreasing function. Prove that
$$
\lim_{n \to \infty} \int_a^b \sqrt[n]{f^n(x) + f^n(a + b - x)} dx = 2 \int_{\frac{a+b}{2}}^b f(x) dx.
$$
