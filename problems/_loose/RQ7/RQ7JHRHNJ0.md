---
tag: RQ7JHRHNJ0
kind: problem
type: answer
answer: \frac{1}{3}e^{-4x}-\frac{1}{3}e^{2x}+(x^{2}+3x)e^{2x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find a particular solution of the equation

$$
y^{\prime \prime}+2 y^{\prime}-8 y=(12 x+20) e^{2 x}
$$

satisfying the initial conditions $y(0)=0, y^{\prime}(0)=1$.
