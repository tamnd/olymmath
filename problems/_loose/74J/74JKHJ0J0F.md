---
tag: 74JKHJ0J0F
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=96
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnam Mathematical Olympiad
---
Given a sequence of real numbers $(x_n)$
$$
x_1 = 3 \text{and} x_n = \frac{n+2}{3n}(x_{n-1} + 2), \forall n \ge 2.
$$
Prove that the sequence has a finite limit as $n \to \infty$ and calculate this limit.
