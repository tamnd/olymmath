---
tag: KKGSH83N9M
kind: problem
type: answer
answer: \pi - 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[-\pi/2,\pi/2]\to\mathbb{R}$ be a twice differentiable function which satisfies $$\left(f''(x)-f(x)\right)\cdot\tan(x)+2f'(x)\geqslant 1,$$for all $x\in(-\pi/2,\pi/2)$. Prove that $$\int_{-\pi/2}^{\pi/2}f(x)\cdot \sin(x) \ dx\geqslant \pi-2.$$
