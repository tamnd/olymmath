---
tag: 9H4GXJQXDJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204497
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Japan/train/0000.parquet#row=316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jp-jmo
    source: hf-mathnet
    label: Japan Japan Mathematical Olympiad
---
Find the number of permutations $p_1,p_2,\ldots,p_{2023}$ of $1,2,\ldots,2023$ such that
$$p_1+|p_2-p_1|+|p_3-p_2|+\ldots+|p_{2023}-p_{2022}|+p_{2023}=4048.$$
