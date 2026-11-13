---
tag: GDCEPD7C6C
kind: problem
type: answer
answer: "2019"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n \in \mathbb{N}$, we define the complex number

$$
a_{n}=(1+i)\left(1+\frac{i}{\sqrt{2}}\right)\left(1+\frac{i}{\sqrt{3}}\right) \cdots\left(1+\frac{i}{\sqrt{n}}\right)
$$

Calculate

$$
\left|a_{1}-a_{2}\right|+\left|a_{2}-a_{3}\right|+\cdots+\left|a_{2019}-a_{2020}\right| \text {. }
$$
