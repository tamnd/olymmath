---
tag: 5MA7YAEQ7Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime. The numbers $1, 2, \ldots, d$ are written on a blackboard, where $d \geq p-1$ is a positive integer. A valid operation is to delete two numbers $x$ and $y$ and write $x + y - c \cdot xy$ in their place, where $c$ is a positive integer. One moment there is only one number $A$ left on the board. Show that if there is an order of operations such that $p$ divides $A$, then $p | d$ or $p | d + 1$.
