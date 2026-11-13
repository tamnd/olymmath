---
tag: 7Z4KHG14RE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=152217
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=6
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
Find a set $S$ of positive integers such that no two distinct subsets of $S$ have the same sum. Your score will be $\left\lfloor 20\left(2^{n} / r-2\right)\right\rfloor$, where $n$ is the number of elements in the set $S$, and $r$ is the largest element of $S$ (assuming, of course, that this number is nonnegative).
