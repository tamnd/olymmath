---
tag: ZX0SXT9HWT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022-23 IOQM India
    url: https://artofproblemsolving.com/community/c6h2950740
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42330
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2022
    source: hf-ai-mo-aops
    label: 2022-23 IOQM India
---
Starting with a positive integer $M$ written on the board , Alice plays the following game: in each move, if $x$ is the number on the board, she replaces it with $3x+2$ .Similarly, starting with a positive integer $N$ written on the board, Bob plays the following game: in each move, if $x$ is the number on the board, he replaces it with $2x+27$ .Given that Alice and Bob reach the same number after playing $4$ moves each, find the smallest value of $M+N$
