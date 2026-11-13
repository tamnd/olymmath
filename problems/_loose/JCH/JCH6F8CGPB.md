---
tag: JCH6F8CGPB
kind: problem
type: answer
answer: '[\frac{(n+1)^{2}}{4}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $\mathrm{n}$, write the positive integers $1, 2, \ldots, \mathrm{n}$ on paper, where some numbers are written in red ink and some in blue ink, with both colors used, and each number is written in only one color. For $1 \leq i \leq j \leq n$, if the numbers written in blue ink among $i, i+1, \ldots, j$ are exactly odd in number, then the pair $(i, j)$ is called "good". Find the maximum possible number of good pairs.
