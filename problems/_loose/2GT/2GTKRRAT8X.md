---
tag: 2GTKRRAT8X
kind: problem
type: answer
answer: a) No. b) Yes, for example 271.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2018
    source: hf-mathnet
    label: Argentina Argentina_2018
---
The rows and the columns of a $16 \times 16$ table are labeled from $1, 2, \dots, 16$, and the product $i \cdot j$ is written in the square in row $i$, column $j$. Several rows are chosen (at least $2$) and also several columns (at least $2$). Then the numbers at their intersections are deleted.

a) Can the sum of all deleted numbers be a prime?

b) What about the sum of all undeleted numbers?
