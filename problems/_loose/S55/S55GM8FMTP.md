---
tag: S55GM8FMTP
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given integer $n \geq 3$. $1, 2, \ldots, n$ were written on the blackboard. In each move, one could choose two numbers $x, y$, erase them, and write down $x + y, |x-y|$ in the place of $x, y$. Find all integers $X$ such that one could turn all numbers into $X$ within a finite number of moves.
