---
tag: H662TCZ5CC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1821468
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18270
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219836
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2019
    source: hf-ai-mo-aops
    label: 2019 Saint Petersburg Mathematical Olympiad
---
Kid and Karlsson play a game. Initially they have a square piece of chocolate $2019\times 2019$ grid with $1\times 1$ cells . On every turn Kid divides an arbitrary piece of chololate into three rectanglular pieces by cells, and then Karlsson chooses one of them and eats it. The game finishes when it's impossible to make a legal move. Kid wins if there was made an even number of moves, Karlsson wins if there was made an odd number of moves.
Who has the winning strategy?

*(Д. Ширяев)*
