---
tag: FPTFBRRY8V
kind: problem
type: answer
answer: 2^{n+1}dividesp-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a \geq 2$ and $n \geq 1$ be integers and $p$ a prime divisor of $a^{2^{n}}+1$. Show that $p-1$ is divisible by $2^{n+1}$.
