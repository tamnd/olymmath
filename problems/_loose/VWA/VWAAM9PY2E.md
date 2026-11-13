---
tag: VWAAM9PY2E
kind: problem
type: answer
answer: f(x) = \cos(x) + \sin(x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ f(x)$ is a continuous function with the piriodicity of $ 2\pi$ and $ c$ is a positive constant number.
Find $ f(x)$ and $ c$ such that $ \int_0^{2\pi} f(t - x)\sin tdt = cf(x)$ with $ f(0) = 1$ for all real numbers $ x$.
