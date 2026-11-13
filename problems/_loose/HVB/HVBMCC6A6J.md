---
tag: HVBMCC6A6J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548759
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65399
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198513
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
Given the true statement: If a quadrilateral is a square, then it is a rectangle. It follows that, of the converse and the inverse of this true statement is: $ \textbf{(A)}\ \text{only the converse is true} \textbf{(B)}\ \text{only the inverse is true } \textbf{(C)}\ \text{both are true} $ $\textbf{(D)}\ \text{neither is true} \textbf{(E)}\ \text{the inverse is true, but the converse is sometimes true} $
