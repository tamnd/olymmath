---
tag: KBVDJGSMN3
kind: problem
type: answer
answer: "104"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Yasha and Grisha are playing a game: first, they take turns naming a number from 1 to 105 (Grisha names the number first, the numbers must be different). Then each counts the number of different rectangles with integer sides, the perimeter of which is equal to the named number. The one with the greater number of rectangles wins. What number should Grisha name to win? Rectangles that differ only by rotation are considered the same. For example, rectangles $2 \times 3$ and $3 \times 2$ are the same.
