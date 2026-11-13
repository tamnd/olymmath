---
tag: DDZFGHDWQM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $n \times n$ grid board, black and white square blocks are placed, with each block occupying exactly one grid position. First, the first layer of square blocks is placed arbitrarily, then the restriction is remembered: each black block should be adjacent to an even number of white blocks, and each white block should be adjacent to an odd number of black blocks. When placing the second layer, the condition should be met for all blocks in the first layer. If the condition is already met for all blocks in the second layer, there is no need to place a third layer. Otherwise, a third layer of blocks must be placed to meet the condition for all blocks in the second layer, and so on. Is there a way to place the first layer of blocks so that this process never ends?
