---
tag: 244MXZXTK6
kind: problem
type: answer
answer: f(x)=1orf(x)=-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f: R \rightarrow R$, which simultaneously satisfy the conditions:

1) $|f(x)| \geq 1$, for any real number $x$.
2) $f(x+y)=\frac{f(x)+f(y)}{1+f(x) \cdot f(y)}$, for any real numbers $x$ and $y$.
