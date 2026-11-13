---
tag: MNFKBC75V5
kind: problem
type: answer
answer: f(2) = \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A continuous function $ f(x)$ satisfies that $ \frac {d}{dx}\left(\int_0^x f(x + t)\ dt \right)= 0$. Find the necessary and sufficient condition such that $ \sum_{n = 1}^{\infty} f(2^n) = 1$.
