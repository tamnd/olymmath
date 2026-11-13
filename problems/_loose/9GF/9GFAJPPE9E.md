---
tag: 9GFAJPPE9E
kind: problem
type: answer
answer: f(x) = 2x + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all strictly increasing functions $f:\mathbb{N}_0\to\mathbb{N}_0$ which satisfy $$f(x)\cdot f(y)\mid (1+2x)\cdot f(y)+(1+2y)\cdot f(x)$$for all non-negative integers $x{}$ and $y{}$.
