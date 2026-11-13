---
tag: JQHRJB5M4K
kind: problem
type: answer
answer: t = 3 and (x, y, z) is any permutation of (1, 2, 3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl
    source: hf-mathnet
    label: Baltic Way Baltic Way shortlist
---
Find all quadruples $(x, y, z, t)$ of positive integers that satisfy the system of equations
$$
\begin{cases} xyz = t! \\ (x+1)(y+1)(z+1) = (t+1)! \end{cases}
$$
