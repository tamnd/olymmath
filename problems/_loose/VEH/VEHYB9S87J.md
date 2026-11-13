---
tag: VEHYB9S87J
kind: problem
type: answer
answer: If a_k ≥ 1, the limit is {a_k}; if a_k < 1, the limit is 0.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k \ge 2$ be an integer and $0 < a_1 < a_2 < \dots < a_k$ be real numbers. Compute $\lim_{n \to \infty} \{ \sqrt[n]{a_1 n + a_2^n + \dots + a_k^n} \}$, where $\{x\}$ denotes the fractional part of $x$.
