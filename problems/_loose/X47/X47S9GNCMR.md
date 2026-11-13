---
tag: X47S9GNCMR
kind: problem
type: answer
answer: 4 - \pi
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the function $ f(\theta) = \int_0^1 |\sqrt {1 - x^2} - \sin \theta|dx$ in the interval of $ 0\leq \theta \leq \frac {\pi}{2}$.

(1) Find the maximum and minimum values of $ f(\theta)$.

(2) Evaluate $ \int_0^{\frac {\pi}{2}} f(\theta)\ d\theta$.
