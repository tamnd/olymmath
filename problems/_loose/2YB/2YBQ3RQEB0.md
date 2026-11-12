---
tag: 2YBQ3RQEB0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Given four arbitrary positive integers $A, B, C, D$. Prove that if we form four numbers $A_{1}, B_{1}, C_{1}, D_{1}$, which are respectively the differences between $A$ and $B$, between $B$ and $C$, between $C$ and $D$, and between $D$ and $A$ (we always subtract the smaller number from the larger one), then from the numbers $A_{1}, B_{1}, C_{1}, D_{1}$ form a new quartet of numbers $A_{2}, B_{2}, C_{2}, D_{2}$ in the same way, and so on, we will eventually arrive at a quartet of zeros after a few steps.

For example, starting with the quartet of numbers $32, 1, 110, 7$, we sequentially obtain

| 32, | 1, | 110, | $7 ;$ |
| ---: | ---: | ---: | ---: |
| 31, | 109, | 103, | $25 ;$ |
| 78, | 6, | 78, | $6 ;$ |
| 72, | 72, | 72, | $72 ;$ |
| 0, | 0, | 0, | 0. |

b) Does the statement of part a) hold if the (positive) numbers $A, B, C, D$ are rational but not necessarily integers? What if these numbers are irrational?
