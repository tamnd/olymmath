---
tag: Q0B41XY9GH
kind: problem
type: answer
answer: 'f: \mathbb{N} \to \mathbb{N}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218961
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist a function $f:\mathbb N\to\mathbb N$ such that
$$
f(f(n+1))=f(f(n))+2^{n-1}
$$
for any positive integer $n$? (As usual, $\mathbb N$ stands for the set of positive integers.)

*(I. Gorodnin)*
