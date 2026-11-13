---
tag: 7E5JDF0NTN
kind: problem
type: answer
answer: "333"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85256
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=83
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a sequence of numbers $a_{1}, a_{2}, \ldots, a_{1000}$ consisting of 1000 different numbers, a pair $\left(a_{i}, a_{j}\right)$ with $i < j$ is called increasing if $a_{i} < a_{j}$ and decreasing if $a_{i} > a_{j}$. Determine the largest positive integer $k$ with the property that in any sequence of 1000 different numbers, there are at least $k$ non-overlapping increasing pairs or at least $k$ non-overlapping decreasing pairs.
