---
tag: Q9H6MBJ7C7
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20012
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Misha thought of a five-digit number, all digits of which are different, and Igor is trying to guess it. In one move, Igor can choose several digits of the number, and Misha, in any order, tells the digits that stand in these places. The order in which to tell the digits is chosen by Misha. For example, if the number thought of is 67890, and Igor asked about the digits in the 1st and 5th places, then Misha can answer either "6 and 0" or "0 and 6". In what minimum number of moves can Igor guarantee to find out the number?
