---
tag: 4RDZRWXQRQ
kind: problem
type: answer
answer: AB = 1/√3, BC = 1, AC = √((4 − √3)/3), AD = 1, BD = 2/√3, CD = √((7 − √3)/3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=64
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The tetrahedron $ABCD$ has $AD + BC + AB\sqrt{3} = 3$, volume $\frac{1}{12}$, and $\angle ABC = 60^\circ$. Compute the lengths of its edges.
