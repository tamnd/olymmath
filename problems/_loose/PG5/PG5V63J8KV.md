---
tag: PG5V63J8KV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h3230518
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29195
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2023 Tournament of Towns
---
There is a bacterium in one of the cells of a $10 \times 10{}$ checkered board. At the first move, the bacterium shifts to a cell adjacent by side to the original one, and divides into two bacteria (both stay in the same cell). Then again, one of the bacteria on the board shifts to a cell adjacent by side and divides into two bacteria, and so on. Is it possible that after some number of such moves the number of bacteria in each cell of the board is the same?

*Alexandr Gribalko*
