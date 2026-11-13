---
tag: DGTZT9PBBP
kind: problem
type: answer
answer: f(x) = 1/x^2 for all positive rational x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Find all functions $f: Q^+ \to Q^+$ such that
$$
f(x) + f(y) + 2xyf(xy) = \frac{f(xy)}{f(x+y)}, \textcircled{1}
$$
Where $Q^+ = \{q \mid q \text{ is a positive rational number}\}$.
