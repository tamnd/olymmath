---
tag: X6PHB13SFD
kind: problem
type: answer
answer: f(x) = 1 for all non-negative real x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Find all functions $f$ from the set of all non-negative real numbers to the set of all real numbers such that $f(1) = 1$ and
$$
(f(x+y))^2 \le f(x^2 - 2xy + y^2)
$$
for all real numbers $x$ and $y$ that satisfy the inequality $x + y \ge 0$.
