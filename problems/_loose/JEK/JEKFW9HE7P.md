---
tag: JEKFW9HE7P
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a stone on each square of $n\times n$ chessboard. We gather $n^2$ stones and distribute them to the squares (again each square contains one stone) such that any two adjacent stones are again adjacent. Find all distributions such that at least one stone at the corners remains at its initial square. (Two squares are adjacent if they share a common edge.)
