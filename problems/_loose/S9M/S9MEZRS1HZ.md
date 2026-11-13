---
tag: S9MEZRS1HZ
kind: problem
type: answer
answer: 2A=B
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a race, 200 cyclists participate. At the beginning of the race, the cyclists are lined up one behind the other. We say that a cyclist overtakes if they swap places with the cyclist directly in front of them. During the race, the order changes only when a cyclist overtakes.

Let $A$ be the number of all possible orders at the end of the race in which each cyclist has overtaken exactly once, and let $B$ be the number of all possible orders at the end of the race in which each cyclist has overtaken at most once. Prove that

$$
2 A = B
$$
