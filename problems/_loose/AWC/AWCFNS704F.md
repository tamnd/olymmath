---
tag: AWCFNS704F
kind: problem
type: answer
answer: k = \frac{2}{\pi}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a continuous function satisfying $f(x)=1+k\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} f(t)\sin (x-t)dt\ (k:constant\ number)$

Find the value of $k$ for which $\int_0^{\pi} f(x)dx$ is maximized.
