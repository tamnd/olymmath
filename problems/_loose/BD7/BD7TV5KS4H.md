---
tag: BD7TV5KS4H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 AMC 10
    url: https://artofproblemsolving.com/community/c6h3199242
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64808
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256407
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
Define an *upno* to be a positive integer of $2$ or more digits where the digits are strictly increasing moving left to right. Similarly, define a *downno* to be a positive integer of $2$ or more digits where the digits are strictly decreasing moving left to right. For instance, the number $258$ is an *upno* and $8620$ is a *downno*. Let $U$ equal the total number of *upno*s and let $D$ equal the total number of *downno*s. What is $|U-D|$ ? $\textbf{(A)}~512 \textbf{(B)}~10 \textbf{(C)}~0 \textbf{(D)}~9 \textbf{(E)}~511$
