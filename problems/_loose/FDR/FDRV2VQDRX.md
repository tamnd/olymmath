---
tag: FDRV2VQDRX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Peru Iberoamerican Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3154325
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50504
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-ibero-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Peru Iberoamerican Team Selection Test
---
The numbers $1, 2,\ldots ,50$ are written on a blackboard. Ana performs the following operations: she chooses any three numbers $a, b$ and $c$ from the board and replaces them with their sum $a + b + c$ and writes the number $(a + b) (b + c) (c + a)$ in the notebook. Ana performs these operations until there are only two numbers left on the board ( $24$ operations in total). Then, she calculates the sum of the numbers written down in her notebook. Let $M$ and $m$ be the maximum and minimum possible of the sums obtained by Ana.
Find the value of $\frac{M}{m}$ .
