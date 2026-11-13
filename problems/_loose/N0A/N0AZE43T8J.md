---
tag: N0AZE43T8J
kind: problem
type: answer
answer: "40"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Some bugs are sitting on squares of $10\times 10$ board. Each bug has a direction associated with it **(up, down, left, right)**. After 1 second, the bugs jump one square in **their associated **direction. When the bug reaches the edge of the board, the associated direction reverses (up becomes down, left becomes right, down becomes up, and right becomes left) and the bug moves in that direction. It is observed that it is **never** the case that two bugs are on same square. What is the maximum number of bugs possible on the board?
