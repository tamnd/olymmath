---
tag: XBWPKDTSZA
kind: problem
type: answer
answer: (m, n) = (1, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the equation $m^{gcd(m,n)} = n^{lcm(m,n)}$ in positive integers, where gcd($m, n$) - greatest common
divisor of $m,n$, and lcm($m, n$) - least common multiple of $m,n$.
