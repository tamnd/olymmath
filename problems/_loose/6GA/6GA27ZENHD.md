---
tag: 6GA27ZENHD
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130225
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An integer is a perfect number if and only if it is equal to the sum of all of its divisors except itself. For example, 28 is a perfect number since $28=1+2+4+7+14$.
Let $n$ ! denote the product $1 \cdot 2 \cdot 3 \cdots n$, where $n$ is a positive integer. An integer is a factorial if and only if it is equal to $n!$ for some positive integer $n$. For example, 24 is a factorial number since $24=4!=1 \cdot 2 \cdot 3 \cdot 4$. Find all perfect numbers greater than 1 that are also factorials.
