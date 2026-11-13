---
tag: 9G8STN0ZPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281746
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65332
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
From a two-digit number $ N$ we subtract the number with the digits reversed and find that the result is a positive perfect cube. Then:

$ \textbf{(A)}\ {N}\text{ cannot end in 5} \textbf{(B)}\ {N}\text{ can end in any digit other than 5}
\textbf{(C)}\ {N}\text{ does not exist}
\textbf{(D)}\ \text{there are exactly 7 values for }{N}
\textbf{(E)}\ \text{there are exactly 10 values for }{N}$
