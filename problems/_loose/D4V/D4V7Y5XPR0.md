---
tag: D4V7Y5XPR0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3059224
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57304
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2001
    source: hf-ai-mo-aops
    label: 2001 Saint Petersburg Mathematical Olympiad
---
All the cells of a $10\times10$ board are colored white initially. Two players are playing a game with alternating moves. A move consists of coloring any un-colored cell black. A player is considered to loose, if after his move no white domino is left. Which of the players has a winning strategy?

*Proposed by A. Khrabrov*
