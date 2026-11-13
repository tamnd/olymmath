---
tag: 7XRBT7CCMG
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ such that there are $\infty$ many lines of Pascal's triangle that have entries coprime to $n$ only. In other words: such that there are $\infty$ many $k$ with the property that the numbers $\binom{k}{0},\binom{k}{1},\binom{k}{2},...,\binom{k}{k}$ are all coprime to $n$.
