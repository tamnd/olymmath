---
tag: K84ECW3EBX
kind: problem
type: answer
answer: 1+2004\cdot2002!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\{1,2, \cdots, 2004\}, f: A \rightarrow A$ be a one-to-one mapping, and satisfy $f^{[2004]}(x)=f(x)$, where $f^{[2004]}(x)=\overbrace{f(f(f(\cdots f(f}^{2004}(x)) \cdots)))$, how many such $f$ are there?
