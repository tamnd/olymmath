---
tag: 7G4MKGVZ7B
kind: problem
type: answer
answer: "128"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{N} \rightarrow \mathbb{N}$ satisfy

$f(1)=2, f(2)=1, f(3 n)=3 f(n), f(3 n+1)=3 f(n)+2, f(3 n+2)=3 f(n)+1$.

Find how many integers $n \leq 2014$ such that $f(n)=2 n$.
