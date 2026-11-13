---
tag: ZSGQY9SGMY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h256245
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65166
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198332
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
The expression $ \frac{2x^2-x}{(x+1)(x-2)}-\frac{4+x}{(x+1)(x-2)}$ cannot be evaluated for $ x=-1$ or $ x=2$ , since division by zero is not allowed. For other values of $ x$ : $\textbf{(A)}\ \text{The expression takes on many different values.}
\textbf{(B)}\ \text{The expression has only the value 2.}
\textbf{(C)}\ \text{The expression has only the value 1.}
\textbf{(D)}\ \text{The expression always has a value between } -1 \text{ and } +2.
\textbf{(E)}\ \text{The expression has a value greater than 2 or less than } -1.$
