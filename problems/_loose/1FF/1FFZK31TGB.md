---
tag: 1FFZK31TGB
kind: problem
type: answer
answer: all integers n ≥ 6 with n ≠ 7
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 60th Ukrainian National Mathematical Olympiad
---
We have to place natural numbers $a_1, a_2, \dots, a_n$ that are not all equal at the vertices of a regular $n$-sided polygon $A_1A_2\dots A_n$, $n \ge 6$ with center at $O$ in such a way that for every vertex $A_i$ there exist two vertices $A_k$ and $A_l$, that are symmetrical with respect to the line $OA_i$ and the equation $a_i = \frac{1}{2}(a_k + a_l)$ holds. For which $n \ge 6$ can we do this?
(Bogdan Rublyov)
