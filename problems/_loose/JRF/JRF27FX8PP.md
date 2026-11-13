---
tag: JRF27FX8PP
kind: problem
type: answer
answer: n^3 + 3n \binom{n}{2} + \binom{n}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205907
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of ways in which three numbers can be selected from the set $\{1,2,\cdots ,4n\}$, such that the sum of the three selected numbers is divisible by $4$.
