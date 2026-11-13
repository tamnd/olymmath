---
tag: JXB1YT2TYN
kind: problem
type: answer
answer: B
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nl-nwo
    source: hf-mathnet
    label: Netherlands Dutch Mathematical Olympiad
---
There is a power plant in the cell indicated by $C$. The cells indicated by $X$ are places to which the power plant should be connected. This requires electricity masts in some cells, which we can indicate by placing an $M$ in that cell. Two cells with a letter in them can be connected by a cable if the cells are adjacent at a side or a vertex. Ultimately, each cell with an $X$ must be connected to the power plant via one or more cells with the letters $M$ or $X$.

| $X$ | | $X$ | |
| | | | |
| | | | |
| $X$ | | | $X$ |
| | | | |
| $X$ | | $C$ | |
| | | | $X$ |

What is the minimum number of electricity masts needed?
A) 3 B) 4 C) 5 D) 8 E) 9
