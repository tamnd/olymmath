---
tag: VQF3SP4K29
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every nonnegative integer $n{}$ let $f(n)$ be the smallest number of digits $1$ which can represent the number $n{}$ using the symbols $"+", "-", "\times", "(", ")"$. For example, $80=(1+1+1+1+1)\times(1+1+1+1)\times(1+1+1+1)$ and $f(80)\leq 13$. Prove that $2\log_3 n \leq f(n) < 5\log_3 n$ for every $n>1$.
