---
tag: T1PQDBAVM9
kind: problem
type: answer
answer: \frac{2}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define Rooms $P,\ Q$ by cutting an equilateral triangle into nine rooms by edges as the attached figure. A ball starts from $P$ and moves to adjacent　room with which the ball shares edge every one second without remaining the room with equiprobable. Find the probability such that the ball will move into the Room $Q$ after $n$ seconds.
