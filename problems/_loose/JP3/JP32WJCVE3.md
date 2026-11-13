---
tag: JP32WJCVE3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h257263
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65237
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198391
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
The pairs of values of $ x$ and $ y$ that are the common solutions of the equations $ y=(x+1)^2$ and $ xy+y=1$ are:

$ \textbf{(A)}\ \text{3 real pairs} \textbf{(B)}\ \text{4 real pairs} \textbf{(C)}\ \text{4 imaginary pairs}
\textbf{(D)}\ \text{2 real and 2 imaginary pairs} \textbf{(E)}\ \text{1 real and 2 imaginary pairs}$
