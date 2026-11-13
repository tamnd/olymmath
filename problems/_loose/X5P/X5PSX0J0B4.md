---
tag: X5PSX0J0B4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h435357
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66351
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199351
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
It is desired to construct a right triangle in the coordinate plane so that its legs are parallel to the $x$ and $y$ axes and so that the medians to the midpoints of the legs lie on the lines $y = 3x + 1$ and $y = mx + 2$ . The number of different constants $m$ for which such a triangle exists is $ \textbf{(A)}\ 0 \textbf{(B)}\ 1 \textbf{(C)}\ 2 \textbf{(D)}\ 3 \textbf{(E)}\ \text{more than 3} $
