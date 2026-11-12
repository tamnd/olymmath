---
tag: RJAVCA1QHG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A strip of cells $1 \times 1000000$ is divided into 100 segments. Each cell contains an integer, and the numbers in the cells within the same segment are the same. A chip is placed in each cell. Then the following operation is performed: all chips are simultaneously moved, each by the number of cells to the right indicated in its cell (if the number is negative, the chip moves to the left); as a result, each cell again contains one chip. This operation is repeated many times. For each chip in the first segment, the number of operations it takes for the chip to return to this segment for the first time is calculated. Prove that among the obtained numbers, there are no more than 100 different ones.
