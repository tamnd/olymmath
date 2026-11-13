---
tag: FY28J0C2PC
kind: problem
type: answer
answer: A=5,B=10,C=15,D=30
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each letter in the table represents a certain natural number (the same letters represent the same numbers). We know the sums of the values in the third row, in the fourth row, and in the first column. Determine at least one suitable quadruple of numbers that can replace the letters $A, B, C, D$.

| $D$ | $A$ | $C$ | $B$ | |
| :---: | :---: | :---: | :---: | :---: |
| $C$ | $B$ | $D$ | $A$ | |
| $B$ | $C$ | $B$ | $C$ | 50 |
| $D$ | $A$ | $A$ | $A$ | 45 |
| 85 | | | | |

( $\check{S}$. Ptáčková)
