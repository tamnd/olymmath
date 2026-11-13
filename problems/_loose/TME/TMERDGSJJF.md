---
tag: TMERDGSJJF
kind: problem
type: answer
answer: γ ≥ n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $n$ are given. Positive numbers $x_0, x_1, \dots, x_n$ such that $x_0 x_1 \dots x_n = 1$. Find all positive $\gamma$ such that inequality
$$
x_0^\gamma + x_1^\gamma + \dots + x_n^\gamma \ge \frac{1}{x_0} + \frac{1}{x_1} + \dots + \frac{1}{x_n}
$$
holds for any set of numbers $x_0, x_1, \dots, x_n$.
