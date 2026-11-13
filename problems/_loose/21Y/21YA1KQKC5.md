---
tag: 21YA1KQKC5
kind: problem
type: answer
answer: (2,4)or(k,k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive integers $(a, b)$, where $a, b \geq 2$, such that for all positive integers $n$ satisfying $a^{n}-n^{a} \neq 0$, we have $\left(a^{n}-n^{a}\right) \mid\left(b^{n}-n^{b}\right)$.
