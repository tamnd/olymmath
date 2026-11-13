---
tag: ENMKA4BRST
kind: problem
type: answer
answer: Equality holds if and only if f(x) = 1 − x on [0, 1].
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=54
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a positive number and $f : [0, 1] \to \mathbb{R}$ be a continuous concave function, such that $f(0) = 1$. Show that
$$
(p+1) \int_{0}^{1} x^{2p} f(x) dx + \frac{2p-1}{8p+4} \le \left( \int_{0}^{1} f(x) dx \right)^{2}
$$
and find when the equality is possible.
