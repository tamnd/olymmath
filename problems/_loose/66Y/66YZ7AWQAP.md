---
tag: 66YZ7AWQAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Find all functions $f: \mathbb{Z}^+ \rightarrow \mathbb{Z}^+$ satisfying the following conditions:
* For all $x, y \in \mathbb{Z}^+$, $f(x) + f(y)$ is divisible by $x + y$.
* For any integer $x \ge 1395$, the inequality $2f(x) \le x^3$ holds.
