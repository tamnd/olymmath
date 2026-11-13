---
tag: JZBZYKQSWP
kind: problem
type: answer
answer: "1007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a blackboard, the 2014 positive integers from 1 to 2014 are written. The allowed operation is to choose two numbers $a$ and $b$, erase them, and write in their place the numbers $gcd(a, b)$ (Greatest Common Divisor) and $lcm(a, b)$ (Least Common Multiple). This operation can be performed on any two numbers on the blackboard, including numbers that resulted from previous operations. Determine the maximum number of 1s that can be left on the blackboard.
