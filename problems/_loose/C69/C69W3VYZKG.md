---
tag: C69W3VYZKG
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
This year, some contestants at the Memorial Contest ABC are friends with each other (friendship is always mutual). For each contestant $X$, let $t(X)$ be the total score that this contestant achieved in previous years before this contest. It is known that the following statements are true:
$1)$ For any two friends $X'$ and $X''$, we have $t(X') \neq t(X''),$
$2)$ For every contestant $X$, the set $\{ t(Y) : Y \text{ is a friend of } X \}$ consists of consecutive integers.
The organizers want to distribute the contestants into contest halls in such a way that no two friends are in the same hall. What is the minimal number of halls they need?
