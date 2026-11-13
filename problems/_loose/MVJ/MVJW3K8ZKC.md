---
tag: MVJW3K8ZKC
kind: problem
type: answer
answer: det(A_n) = (-1)^{n-1} · ∏_{j=2}^{n} (2j−1)/(j−1)^2 = (-1)^{n-1} · (2n−1)!! / ((n−1)!)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo
    source: hf-mathnet
    label: JBMO THE 47-th MATHEMATIAL OLYMPIAD OF REPUBLIC OF MOLDOVA
---
For every positive integer $n \geq 1$ we define the matrix $A_n = (a_{ij})_{1 \leq i, j \leq n}$, where $a_{ij} = \max(i, j) / \min(i, j)$, $1 \leq i, j \leq n$. Calculate the determinant of the matrix $A_n$.
