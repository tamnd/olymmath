---
tag: NBNRYBD7B8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h570682
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65593
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198656
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
Let $$F=\log\dfrac{1+x}{1-x}.$$ Find a new function $G$ by replacing each $x$ in $F$ by $$\dfrac{3x+x^3}{1+3x^2},$$ and simplify. The simplified expression $G$ is equal to: $\textbf{(A)}\ -F \textbf{(B)}\ F \textbf{(C)}\ 3F \textbf{(D)}\ F^3 \textbf{(E)}\ F^3-F$
