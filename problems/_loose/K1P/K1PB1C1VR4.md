---
tag: K1PB1C1VR4
kind: problem
type: answer
answer: "8453"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence is defined recursively:

$x_{0}=0, x_{n+1}=\frac{\left(n^{2}+n+1\right) x_{n}+1}{n^{2}+n+1-x_{n}} . $ Find $x_{8453}$. (12 points)
