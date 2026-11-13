---
tag: FDQMT05C4Z
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90568
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=85
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a certain block, there are five houses in a line, which are to be painted red or green. If no two houses next to each other can be red, how many ways can you paint the houses?
