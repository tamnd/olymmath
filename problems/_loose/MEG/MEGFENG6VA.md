---
tag: MEGFENG6VA
kind: problem
type: answer
answer: C_{1}+C_{2}e^{10x}+C_{3}e^{-10x}+\frac{x}{10}e^{10x}-\frac{1}{20}\sin10x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the general solution of the linear differential equation

$$
y^{\prime \prime \prime}-100 y^{\prime}=20 e^{10 x}+100 \cos 10 x
$$
