---
tag: TX1AQ03GD3
kind: problem
type: answer
answer: 10,15,20,25,30,35,40
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125246
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0003.parquet#row=327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are many sets of two different positive integers $a$ and $b$, both less than 50 , such that $a^{2}$ and $b^{2}$ end in the same last two digits. For example, $35^{2}=1225$ and $45^{2}=2025$ both end in 25 . What are all possible values for the average of $a$ and $b$ ?
For the purposes of this problem, single-digit squares are considered to have a leading zero, so for example we consider $2^{2}$ to end with the digits 04 , not 4 .
