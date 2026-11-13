---
tag: 3YWVA87CVV
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $A$, $B$ be two points on a plane and $M$ be the midpoint of $AB$. We firstly choose a point $P$ on the segment $AB$, other than $A$, $B$, $M$. At step $i$ we choose a red point $P_i$ then choose one of $A$ and $B$, call it $X_i$, and reflect $P_i$ with respect to $X_i$ to get $Q_i$, then color the midpoint of $Q_iX_i$ red. Is it possible that after a few steps we color the $M$ by red?
