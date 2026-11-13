---
tag: 1Q1FRYDCTC
kind: problem
type: answer
answer: "21"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154206
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=57
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the last two digits of $0!+5!+10!+15!+\cdots+100$ !.
(a) 00
(b) 11
(c) 21
(d) 01
