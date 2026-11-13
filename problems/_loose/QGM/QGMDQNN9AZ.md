---
tag: QGMDQNN9AZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h2841424
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44121
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2022
    source: hf-ai-mo-aops
    label: 2022 Iran MO (2nd round)
---
define $(a_n)_{n \in \mathbb{N}}$ such that $a_1=2$ and $$ a_{n+1}=\left(1+\frac{1}{n}\right)^n \times a_{n} $$ Prove that there exists infinite number of $n$ such that $\frac{a_1a_2 \ldots a_n}{n+1}$ is a square of an integer.
