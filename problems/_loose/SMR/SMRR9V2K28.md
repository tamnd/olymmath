---
tag: SMRR9V2K28
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h435093
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66340
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199339
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
A student attempted to compute the average $A$ of $x$ , $y$ and $z$ by computing the average of $x$ and $y$ , and then computing the average of the result and $z$ . Whenever $x < y < z$ , the student's final result is $\textbf{(A)}\ \text{correct}$ $\textbf{(B)}\ \text{always less than A}$ $\textbf{(C)}\ \text{always greater than A}$ $\textbf{(D)}\ \text{sometimes less than A and sometimes equal to A}$ $\textbf{(E)}\ \text{sometimes greater than A and sometimes equal to A}$
