---
tag: 8FKFDTX5ZR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216675
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a regular polygon $A_1A_2\ldots A_{6n+3}$. The vertices $A_{2n+1}, A_{4n+2}, A_{6n+3}$ are called *holes*. Initially there are three pebbles in some vertices of the polygon, which are also vertices of equilateral triangle. Players $A$ and $B$ take moves in turn. In each move, starting from $A$, the player chooses pebble and puts it to the next vertex clockwise (for example, $A_2\rightarrow A_3$, $A_{6n+3}\rightarrow A_1$). Player $A$ wins if at least two pebbles lie in holes after someone's move. Does player $A$ always have winning strategy?

*Proposed by Bohdan Rublov *
