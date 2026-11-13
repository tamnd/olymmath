---
tag: QCCBRWN5J0
kind: problem
type: answer
answer: 16,25,36,49,64,81,7744
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find all numbers of the form

$$
\underbrace{a a a \ldots a}_{n \text{ times}} \underbrace{b b b \ldots b}_{n \text{ times}}
$$

that are perfect squares.
