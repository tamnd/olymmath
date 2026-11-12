---
tag: JTXDVBYBTT
kind: problem
type: answer
answer: 14<a_{100}<18
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_{1}, a_{2}, a_{3}, \ldots$ is formed according to the following rule:

$$
a_{1}=1, a_{2}=a_{1}+\frac{1}{a_{1}}, \ldots, a_{n}=a_{n-1}+\frac{1}{a_{n-1}}
$$

Prove that $a_{100}>14$.
