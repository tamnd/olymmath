---
tag: RTGJ1ZN6RZ
kind: problem
type: answer
answer: \text{The number } a + b \text{ is not a power of 2 with integer exponent.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are integers $a$ and $b$, such that $a>b>1$ and $b$ is the largest divisor of $a$ different from $a$. Prove that the number $a+b$ is not a power of $2$ with integer exponent.
