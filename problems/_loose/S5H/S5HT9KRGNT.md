---
tag: S5HT9KRGNT
kind: problem
type: answer
answer: f(x) = 0, f(x) = x^2, or f(x) = -x^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=398
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
Find all functions from the set of the real numbers to the set of the real numbers which satisfy the functional equation
$$
f(f(x + y)) = f(x^2 - y^2) + 4xyf(x + y)
$$
for all real numbers $x$ and $y$.
