---
tag: XR795FDHFM
kind: problem
type: answer
answer: \frac{a - \ln a - 1}{a (\ln a)^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive real number $ a > 1$, prove the following inequality.

$ \frac {1}{a - 1}\left(1 - \frac {\ln a}{a-1}\right) < \int_0^1 \frac {x}{a^x}\ dx < \frac {1}{\ln a}\left\{1 - \frac {\ln (\ln a + 1)}{\ln a}\right\}$
