---
tag: HTMYMNYWDB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3112274
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=634
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204303
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
Sasha has $10$ cards with numbers $1, 2, 4, 8,\ldots, 512$ . He writes the number $0$ on the board and invites Dima to play a game. Dima tells the integer $0 < p < 10, p$ can vary from round to round. Sasha chooses $p$ cards before which he puts a " $+$ " sign, and before the other cards he puts a " $-$ " sign. The obtained number is calculated and added to the number on the board. Find the greatest absolute value of the number on the board Dima can get on the board after several rounds regardless Sasha's moves.
