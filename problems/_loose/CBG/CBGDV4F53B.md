---
tag: CBGDV4F53B
kind: problem
type: answer
answer: a_{n}>2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of numbers is given by $a_{k}=3 a_{k-1}+2 a_{k-2}$ with $a_{i} \in N$ for each $i \in N ; k \geq 3 ; a_{1} \geq 1 ; a_{2} \geq a_{1}$. Show that then it holds: $a_{k}>2^{k-2}$.
