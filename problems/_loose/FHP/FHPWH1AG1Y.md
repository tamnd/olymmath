---
tag: FHPWH1AG1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a natural number permitted if it has no more than 20 different prime divisors. Initially, there is a pile of 2004! (i.e., $1 \cdot 2 \cdot \ldots \cdot 2004$)
stones. Two players take turns removing a permitted number of stones from the pile (possibly a different number each time). The player who takes the last stones wins. Who wins with correct play?
