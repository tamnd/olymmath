---
tag: SCEPZT3Q4H
kind: problem
type: answer
answer: 'All affine functions: f(x) = a x + b for real constants a and b.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=472
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
Determine all functions $f: \mathbb{R} \to \mathbb{R}$, integrable over any bounded interval, satisfying the condition
$$
\int_{x-y}^{x+y} f(t) dt = y(f(x+y) + f(x-y)), \text{for all real numbers } x \text{ and } y.
$$
