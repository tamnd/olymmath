---
tag: 9CAFR74VJZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h255771
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65126
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256599
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
Each angle of a rectangle is trisected. The intersections of the pairs of trisectors adjacent to the same side always form:
$ \textbf{(A)}\ \text{a square} \textbf{(B)}\ \text{a rectangle} \textbf{(C)}\ \text{a parallelogram with unequal sides}
\textbf{(D)}\ \text{a rhombus} \textbf{(E)}\ \text{a quadrilateral with no special properties}$
