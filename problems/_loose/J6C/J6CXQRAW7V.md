---
tag: J6CXQRAW7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3112245
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=629
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2023
    source: hf-ai-mo-aops
    label: 2023 Caucasus Mathematical Olympiad
---
Pasha and Vova play the game crossing out the cells of the $3\times 101$ board by turns. At the start, the central cell is crossed out. By one move the player chooses the diagonal (there can be $1, 2$ or $3$ cells in the diagonal) and crosses out cells of this diagonal which are still uncrossed. At least one new cell must be crossed out by any player's move. Pasha begins, the one who can not make any move loses. Who has a winning strategy?
