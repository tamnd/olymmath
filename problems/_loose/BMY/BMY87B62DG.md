---
tag: BMY87B62DG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h570437
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65577
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198639
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
Given the equations $x^2+kx+6=0$ and $x^2-kx+6=0$ . If, when the roots of the equation are suitably listed, each root of the second equation is $5$ more than the corresponding root of the first equation, then $k$ equals: $\textbf{(A)}\ 5 \textbf{(B)}\ -5 \textbf{(C)}\ 7 \textbf{(D)}\ -7 \textbf{(E)}\ \text{none of these}$
