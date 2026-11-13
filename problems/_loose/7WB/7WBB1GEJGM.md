---
tag: 7WBB1GEJGM
kind: problem
type: answer
answer: m + n - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a grid $2m \times 2n$ is given. Laminates colors each cell of the grid either black or white such that the cells of each color form a polygon. Then Yamal covers the whole grid by $2mn$ dominoes of size $1 \times 2$. The domino is called combined if it covers 1 black and 1 white cell. Find the maximal number of combined dominoes Lamin may guarantee regardless to the strategy of Yamal.
