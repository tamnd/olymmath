---
tag: A53YYBE4D1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90617
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given a family $\mathcal{F}$ of functions from the set $\{1, \ldots, n\}$ to itself. A sequence $\left(f_{1}, \ldots, f_{k}\right)$ of functions in $\mathcal{F}$ is said to be $\operatorname{good}$ if $f_{k} \circ f_{k-1} \circ \cdots \circ f_{1}$ is a constant function. Prove that if there exists a good sequence, there exists one with $k \leq n^{3}$.
