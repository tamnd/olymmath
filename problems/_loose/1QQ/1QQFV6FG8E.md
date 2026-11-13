---
tag: 1QQFV6FG8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 CIIM
    url: https://artofproblemsolving.com/community/c6h3159238
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=80029
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268924
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ciim/2023
    source: hf-ai-mo-aops
    label: 2023 CIIM
---
Determine all the pairs of positive real numbers $(a, b)$ with $a < b$ such that the following series $$ \sum_{k=1}^{\infty} \int_a^b\{x\}^k dx =\int_a^b\{x\} dx + \int_a^b\{x\}^2 dx + \int_a^b\{x\}^3 dx + \cdots $$ is convergent and determine its value in function of $a$ and $b$ .**Note:** $\{x\} = x - \lfloor x \rfloor$ denotes the fractional part of $x$ .
