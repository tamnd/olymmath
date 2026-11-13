---
tag: AEDCJ7V9M3
kind: problem
type: answer
answer: x^2 + y^2 + z^2 + t^2 \le 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267538
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $x, y, z, t$ are real numbers such that $\begin{cases}
|x + y + z -t |\le 1 \\
|y + z + t - x|\le 1 \\
|z + t + x - y|\le 1 \\
|t + x + y - z|\le 1 \end{cases}$
Prove that $x^2 + y^2 + z^2 + t^2 \le 1$.
