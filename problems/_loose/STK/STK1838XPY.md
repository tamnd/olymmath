---
tag: STK1838XPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 AMC 10
    url: https://artofproblemsolving.com/community/c6h3199311
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64817
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=201781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2023 AMC 10
---
Let $L_1=1$ , $L_2=3$ , and $L_{n+2}=L_{n+1}+L_n$ for $n\geq1$ . How many terms in the sequence $L_1, L_2, L_3, \dots, L_{2023}$ are even? $\textbf{(A) }673 \textbf{(B) }1011 \textbf{(C) }675 \textbf{(D) }1010 \textbf{(E) }674$
