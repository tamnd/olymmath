---
tag: P4NVR2V7GQ
kind: problem
type: answer
answer: ((n^2 - 1)/2)^4 - ((n^2 - 1)/2)^3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Let $n \ge 3$ be an odd positive integer. We are given an $n \times n$ board which is divided into white unit squares by lines drawn parallel to the sides of the board. Let $N$ denote the number of ways of placing 2 identical red checkers and 2 identical blue checkers on the board such that
(a) in any such placement, no two checkers occupy the same square; and
(b) none of the placements can be obtained from any other by a rotation of the board.
Prove that
$$
N = \left(\frac{n^2-1}{2}\right)^4 - \left(\frac{n^2-1}{2}\right)^3
$$
