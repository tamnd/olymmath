---
tag: BK87ACKN20
kind: problem
type: answer
answer: When\n\is\odd,\player\B\wins;\when\n\is\even,\player\A\wins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, A and B, take turns using a chisel to pierce through a wooden board with $n \times n$ unit squares. The chisel marks must start from the edge of the board or from a node that has already been chiseled, and each player chisels through one side of a unit square along the grid lines. If a player causes the board to break apart after their move, that player loses. If A starts first and both play with the correct strategy, who will win?
