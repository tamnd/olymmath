---
tag: XGSS087VV1
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each cell of a $10 \times 10$ board one arrow is placed. Each arrow is pointing in one of the four directions $\{\uparrow, \to, \downarrow, \leftarrow\}$. Find the smallest number $n$ with the following property: it is always (regardless of the initial placement of the arrows) possible to remove at most $n$ arrows from the board in such a way that among the remaining ones no two are pointing at each other. Note: arrows are pointing at each other also if there are some other arrows or empty cells between them.
