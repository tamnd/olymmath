---
tag: HRZ7XJWATT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way BALTIC WAY
---
The $n \times n$ board is colored in $n$ colors such that the main diagonal (from top-left to right-bottom) is colored in the first color; the two adjacent diagonals are colored in the second color; the two next diagonals (one from above and one from below) are colored in the third color, etc.; the two corners (top-right and bottom-left) are colored in $n$-th color. It happens that it is possible to place on the board $n$ non-attacking rooks such that no two rooks stand on the cells of the same color. Prove that $n \equiv 0 \text{ or } 1 \pmod{4}$.
