---
tag: SJS4GFFD41
kind: problem
type: answer
answer: "11043"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90450
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a set of size 2023. Find the maximum number of pairs of elements $x, y \in A$ so that $x-y$ is a power of $e$.
