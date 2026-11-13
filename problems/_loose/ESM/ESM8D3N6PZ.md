---
tag: ESM8D3N6PZ
kind: problem
type: answer
answer: "1958"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245906
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the largest positive integer $n$ for which there exists a set $S$ with exactly $n$ numbers such that

- each member in $S$ is a positive integer not exceeding $2002$,
- if $a,b\in S$ (not necessarily different), then $ab\not\in S$.
