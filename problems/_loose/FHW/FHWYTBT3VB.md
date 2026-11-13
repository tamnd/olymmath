---
tag: FHWYTBT3VB
kind: problem
type: answer
answer: "23"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232372
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest natural number, which divides $2^{n}+15$ for some natural number $n$ and can be expressed in the form $3x^2-4xy+3y^2$ for some integers $x$ and $y$.
