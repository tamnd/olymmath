---
tag: 9VKM5V92KR
kind: problem
type: answer
answer: "25"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A$ and $B$ are playing a game on a $25 \times 25$ grid. At the beginning, $A$ can mark some cells. After marking is completed, they start taking turns to place gold coins on the grid, with $B$ going first. The rules for placing gold coins are as follows: (1) gold coins cannot be placed in marked cells; (2) once a gold coin is placed, no more gold coins can be placed in the same row or column; (3) if no more gold coins can be placed on the grid, the game ends. The player who places the last gold coin on the grid wins. How many cells does $A$ need to mark at the beginning of the game to ensure a win? (Assume both $A$ and $B$ use the best strategy)
