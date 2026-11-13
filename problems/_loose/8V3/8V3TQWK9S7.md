---
tag: 8V3TQWK9S7
kind: problem
type: answer
answer: f(n)=f(n-1)+f(n-2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A staircase has $n$ steps, and each step can cover one or two steps at a time. Let the number of ways to reach the top of the staircase be $f(n)$, then the recurrence relation between $f(n)$, $f(n-1)$, and $f(n-2)$ is
