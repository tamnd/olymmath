---
tag: R9DNTR3D5D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90892
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0006.parquet#row=296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of the positive integers $a_{1}, a_{2}, \ldots, a_{n}$ is less than 2016 , and the least common multiple of any two is greater than 2016. Show that

$$
\frac{1}{a_{1}}+\cdots+\frac{1}{a_{n}}<1+\frac{n}{2016} .
$$
