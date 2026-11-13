---
tag: PJMR5BTX97
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Karlo and Lovro are playing the following game. Karlo will cut a paper of size $9 \times 9$ into rectangles of integer dimensions, where at least one dimension is 1. After that, Lovro will choose a natural number $k \in \{1, \ldots, 9\}$, and Karlo will give him as many coins as the total area of all rectangles of dimensions $1 \times k$ and $k \times 1$. Lovro will choose $k$ to maximize the number of coins he receives, while Karlo wants to save and give Lovro as few coins as possible.

Determine the smallest possible number of coins that Karlo will give to Lovro.
