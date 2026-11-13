---
tag: 9KHDN2JDEG
kind: problem
type: answer
answer: "891"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86068
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain LII Olimpiada Matemática Española
---
Find how many integer solutions the equation has

$$
\left|5-x_{1}-x_{2}\right|+\left|5+x_{1}-x_{2}\right|+\left|5+x_{2}+x_{3}\right|+\left|5+x_{2}-x_{3}\right|=20
$$
