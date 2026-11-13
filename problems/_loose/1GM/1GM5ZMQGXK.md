---
tag: 1GM5ZMQGXK
kind: problem
type: answer
answer: "29"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0009.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-mathnet
    label: United States AMC 10 A
---
The numbers, in order, of each row and the numbers, in order, of each column of a $5 \times 5$ array of integers form an arithmetic progression of length $5$. The numbers in positions $(5, 5)$, $(2, 4)$, $(4, 3)$, and $(3, 1)$ are $0$, $48$, $16$, and $12$, respectively. What number is in position $(1, 2)$?
$$
\begin{bmatrix}
\cdot & ? & \cdot & \cdot & \cdot \\
\cdot & \cdot & \cdot & 48 & \cdot \\
12 & \cdot & \cdot & \cdot & \cdot \\
\cdot & \cdot & 16 & \cdot & \cdot \\
\cdot & \cdot & \cdot & \cdot & 0
\end{bmatrix}
$$
