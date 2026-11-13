---
tag: XFTC08RD1D
kind: problem
type: answer
answer: k=1,n=3k=2,n=6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of natural numbers $k$ and $n$ for which the fraction $\frac{4^{k-1}}{n}$ has a decimal representation of the form $0, \bar{n}$, where $\bar{n}$ denotes the repeating part. For example, if $n=720$, then $0, \bar{n}=0,720720720 \ldots$
