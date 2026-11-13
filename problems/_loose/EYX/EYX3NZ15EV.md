---
tag: EYX3NZ15EV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281618
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65328
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256801
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
The points that satisfy the system $ x + y = 1, x^2 + y^2 < 25,$ constitute the following set:

$ \textbf{(A)}\ \text{only two points}
\textbf{(B)}\ \text{an arc of a circle}
\textbf{(C)}\ \text{a straight line segment not including the end-points}
\textbf{(D)}\ \text{a straight line segment including the end-points}
\textbf{(E)}\ \text{a single point}$
