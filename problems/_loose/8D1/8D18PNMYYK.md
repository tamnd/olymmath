---
tag: 8D18PNMYYK
kind: problem
type: answer
answer: "1343"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are some number of green crawlers in the lowest leftmost unit square and some number of brown crawlers in the highest leftmost unit square of the grid $2014 \times 2014$. Each green crawler at each move can pass to the neighboring square located at its up or at its right. Each brown crawler at each move can pass to the neighboring square located at its down or at its right. It turns out that after some number of moves each unit square was visited by at least one crawler. Find the minimal possible number of crawlers.
