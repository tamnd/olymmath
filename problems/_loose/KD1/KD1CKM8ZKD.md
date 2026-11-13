---
tag: KD1CKM8ZKD
kind: problem
type: answer
answer: "1836"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If we remove one or more digits from the beginning and/or end of a positive integer and still have a positive integer left, we call that a fragment of the original number. Thus, 2, 1, 9, 20, 19, and 201 are fragments of 2019.

What is the smallest positive integer $n$ with the property: there is a fragment of $n$ such that when you add that fragment to $n$ itself, the result is 2019?
