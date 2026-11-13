---
tag: HKT0XVQYTX
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81081
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate $\sum_{i=1}^{n} \prod_{j \neq i} \frac{x-a_{j}}{a_{i}-a_{j}}$ for $a_{1}, \ldots, a_{n} \in \mathbb{R}$ pairwise distinct.
