---
tag: ZDHYCT3GSR
kind: problem
type: answer
answer: "1172"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210213
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Japan/train/0000.parquet#row=178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jp-jmo
    source: hf-mathnet
    label: Japan Japan Mathematical Olympiad
---
How many positive integers $n$ are there such that $\left \lfloor \frac{1000000}{n} \right \rfloor -\left \lfloor \frac{1000000}{n+1} \right \rfloor=1?$
