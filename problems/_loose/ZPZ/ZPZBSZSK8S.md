---
tag: ZPZBSZSK8S
kind: problem
type: answer
answer: f(x)=x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ such that for all real numbers $x, y$, we have

$$
f(f(f(x)))+f(f(y))=f(y)+x
$$
