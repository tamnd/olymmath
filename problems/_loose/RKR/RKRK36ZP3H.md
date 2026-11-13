---
tag: RKRK36ZP3H
kind: problem
type: answer
answer: f(x)=ax
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{N} \rightarrow \mathbb{N}$ satisfying

$$
\forall x, y \in \mathbb{N}, f(x+y)=f(x)+f(y)
$$
