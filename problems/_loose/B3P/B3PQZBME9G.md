---
tag: B3PQZBME9G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : \mathbb{R} \to \mathbb{R}$ a periodic and continue function with period $T$ and $F : \mathbb{R} \to \mathbb{R}$ antiderivative of $f$. Then $$\int \limits_0^T \left[F(nx)-F(x)-f(x)\frac{(n-1)T}{2}\right]dx=0$$
