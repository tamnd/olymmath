---
tag: B0KQFFWJZN
kind: problem
type: answer
answer: f(x)=0orf(x)=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbf{Q} \rightarrow \mathbf{Q}$, satisfying the condition
$$
f[x+f(y)]=f(x) \cdot f(y)(x, y \in \mathbf{Q}) .
$$
