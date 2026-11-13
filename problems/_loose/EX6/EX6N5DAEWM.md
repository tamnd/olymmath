---
tag: EX6N5DAEWM
kind: problem
type: answer
answer: allquadratics
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Q} \rightarrow \mathbb{R}$ from rational to real numbers such that for all rational $p, q$,

$$
f(p+2 q)-f(p-2 q)=2(f(p+q)-f(p-q)) .
$$
