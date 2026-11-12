---
tag: XXNZ1D9N5Y
kind: problem
type: answer
answer: \frac{4^{50}-1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence is defined by the formula $x_{n+3}=2 x_{n+2}+x_{n+1}-2 x_{n}$. Additionally, it is known that $x_{0}=0$, $x_{2}=1$. Find $x_{100}$
