---
tag: 85VNTFJ3ZM
kind: problem
type: answer
answer: \binom{n}{k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
OKOSBANK's safe has several different locks. In the bank, $n$ tellers work, each having keys to some of the locks. (A teller can have multiple keys, and multiple tellers can have keys to the same lock.) We know that any $k$ tellers together can always open the safe, but $k-1$ tellers never can. What is the minimum number of locks on the safe?
