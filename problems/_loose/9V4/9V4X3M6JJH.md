---
tag: 9V4X3M6JJH
kind: problem
type: answer
answer: P \geq \frac{1}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an unfair 6 sided dice. When the dice is rolled up two times, let $ P$ be the probability such that same number comes out and $ Q$ be the one such that the number of odd in the first and that of even in the second.

(1) Prove that $ P\geq \frac{1}{6}$, then find the necessary and sufficient condition for which the equality holds.

(2) Prove that $ \frac{1}{4}\geq Q\geq \frac{1}{2}-\frac{3}{2}P$.
