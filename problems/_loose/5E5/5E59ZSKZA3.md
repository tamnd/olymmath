---
tag: 5E59ZSKZA3
kind: problem
type: answer
answer: u(x) = e^{ax} \forall x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $u:R\rightarrow{R}$ for which there exists a strictly monotonic function $f:R\rightarrow{R}$ such that $f(x+y)=f(x)u(y)+f(y)$
for all $x,y\in{\mathbb{R}}$
