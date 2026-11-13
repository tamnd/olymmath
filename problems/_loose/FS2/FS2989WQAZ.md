---
tag: FS2989WQAZ
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive proper divisor is a positive divisor of a number, excluding itself. For positive integers $n \ge 2$, let $f(n)$ denote the number that is one more than the largest proper divisor of $n$. Determine all positive integers $n$ such that $f(f(n)) = 2$.
