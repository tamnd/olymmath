---
tag: 27KTA27RPB
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a set of positive integers such that for any $x,y\in A$,
$$x>y\implies x-y\ge\frac{xy}{25}.$$Find the maximal possible number of elements of the set $A$.
