---
tag: QGBXGGCVJ5
kind: problem
type: answer
answer: "4456448"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154253
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=75
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines AREA STAGE
---
Let $v(X)$ be the sum of elements of a nonempty finite set $X$, where $X$ is a set of numbers. Calculate the sum of all numbers $v(X)$ where $X$ ranges over all nonempty subsets of the set $\{1,2,3, \ldots, 16\}$.
