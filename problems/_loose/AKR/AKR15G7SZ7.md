---
tag: AKR15G7SZ7
kind: problem
type: answer
answer: "53"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a function $g :\mathbb{N} \rightarrow \mathbb{R}$
Such that $g(x)=\sqrt{4^x+\sqrt {4^{x+1}+\sqrt{4^{x+2}+...}}}$.
Find the last 2 digits in the decimal representation of $g(2021)$.
