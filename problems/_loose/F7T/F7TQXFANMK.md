---
tag: F7TQXFANMK
kind: problem
type: answer
answer: 2\lfloor\frac{n}{2}\rfloor - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a $n\times n$ grid with all squares on one diagonal being forbidden. You are allowed to start from any square, and move one step horizontally, vertically or diagonally. You are not allowed to visit a forbidden square or previously visited square. Your goal is to visit all non forbidden squares. Find, with proof, the minimum number of times you will have to move one step diagonally
