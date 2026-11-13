---
tag: 1EBQY831KG
kind: problem
type: answer
answer: a_{1}<a_{3}<\cdots<a_{2k-1}<a_{2k}<\cdots<a_{2}<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89858
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a=0.365$. The sequence $a_{1}, a_{2}, \ldots, a_{2020}$ is defined by the formulas

$$
a_{1}=a, a_{n+1}=a^{a_{n}} \text { for } n=1, \ldots, 2019
$$

Arrange the numbers $a_{1}, a_{2}, \ldots, a_{2020}$ from the smallest to the largest.
