---
tag: 7WH0QECH0D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Polish MO Finals
    url: https://artofproblemsolving.com/community/c6h62184
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=51818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/2000
    source: hf-ai-mo-aops
    label: 2000 Polish MO Finals
---
Find number of solutions in non-negative reals to the following equations:
\begin{eqnarray*}x_1 + x_n ^2 = 4x_n x_2 + x_1 ^2 = 4x_1 ... x_n + x_{n-1}^2 = 4x_{n-1} \end{eqnarray*}
