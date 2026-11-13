---
tag: PFFTRB194X
kind: problem
type: answer
answer: "30"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90359
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=11
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are 100 prisoners, each of whom is given a number between 1 and 100. There is also a room with 100 boxes, labeled 1 to 100 , and 100 pieces of paper with the numbers 1 to 100 on them. Each piece of paper is randomly placed inside one of the 100 boxes.

One at a time, each prisoner is allowed to enter the room and open at most 50 boxes to see the numbers inside. If every prisoner opens the box with his own number inside it, they will all be released. They are not allowed to communicate at all during this process, but they can come up with a strategy beforehand. Show that there is a strategy that gives them at least a $30 \%$ chance of winning.
