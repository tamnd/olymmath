---
tag: K4EMWDGC2E
kind: problem
type: answer
answer: -\ln 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_n\ (n\geq 1)$ be the value for which $\int_x^{2x} e^{-t^n}dt\ (x\geq 0)$ is maximal. Find $\lim_{n\to\infty} \ln a_n.$
