---
tag: PXJW6DCZRM
kind: problem
type: answer
answer: f(n)=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{N} \rightarrow \mathbb{N}$ such that for any natural number $n$,

$$
f(n)+f(f(n)+f(f(f(n)))=3 n
$$
