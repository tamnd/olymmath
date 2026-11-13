---
tag: XYHWJ3XZ30
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h67200
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66221
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257693
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
If the operation $x * y$ is defined by $x * y = (x+1)(y+1) - 1$ , then which one of the following is FALSE? $\textbf{(A)} \ x * y = y *x$ for all real $x$ and $y$ . $\textbf{(B)} \ x * (y + z) = ( x * y ) + (x * z)$ for all real $x,y,$ and $z$ $\textbf{(C)} \ (x-1) * (x+1) = (x * x) - 1$ for all real $x$ . $\textbf{(D)} \ x * 0 = x$ for all real $x$ . $\textbf{(E)} \ x * (y * z) = (x * y) * z$ for all real $x,y,$ and $z$ .
