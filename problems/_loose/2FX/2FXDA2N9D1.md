---
tag: 2FXDA2N9D1
kind: problem
type: answer
answer: M = 6, 9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227498
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a board of $3 \times 3$ you want to write the numbers $1, 2, 3, 4, 5, 6, 7, 8$ and a number in their boxes positive integer $M$, not necessarily different from the above. The goal is that the sum of the three numbers in each row be the same
$a)$ Find all the values of $M$ for which this is possible.
$b)$ For which of the values of $M$ found in $a)$ is it possible to arrange the numbers so that no only the three rows add the same but also the three columns add the same?
