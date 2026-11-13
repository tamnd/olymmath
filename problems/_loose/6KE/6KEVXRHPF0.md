---
tag: 6KEVXRHPF0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220022
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci sequence $F_0, F_1, \ldots$ satisfies $F_0 = 0$, $F_1 = 1$, and $F_{n+2} = F_{n+1} + F_n$ for all $n \ge 0$. Compute the number of triples $(a, b, c)$ with $0 \le a < b < c \le 100$ for which $F_a, F_b, F_c$ is an arithmetic progression.
