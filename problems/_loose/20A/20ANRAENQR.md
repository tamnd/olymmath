---
tag: 20ANRAENQR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250827
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=15
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A non-empty subset of $\{1,2, ..., n\}$ is called *arabic * if arithmetic mean of its elements is an integer. Show that the number of arabic subsets of $\{1,2, ..., n\}$ has the same parity as $n$.
