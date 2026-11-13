---
tag: B8FF5N0VMJ
kind: problem
type: answer
answer: a) {x} = {y}. b) No, such integers do not exist.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=26
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
a) Prove that the equality $\{x\} + \{2y\} = \{y\} + \{2x\}$ for real numbers $x$ and $y$ implies $\{x\} = \{y\}$.

b) Do there exist integers $n \ge 3$ such that the equality $\{x\} + \{ny\} = \{y\} + \{nx\}$ for real numbers $x$ and $y$ implies $\{x\} = \{y\}$?

(Here $\{a\} = a - [a]$, where $[a]$ stands for the greatest integer that does not exceed the real number $a$.)
