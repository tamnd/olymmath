---
tag: DSN5FTC9CC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h252074
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66673
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199669
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
A line $ x = k$ intersects the graph of $ y = \log_5{x}$ and the graph of $ y = \log_5{(x + 4)}$ . The distance between the points of intersection is $ 0.5$ . Given that $ k = a + \sqrt{b}$ , where $ a$ and $ b$ are integers, what is $ a + b$ ?

$ \textbf{(A)}\ 6
\textbf{(B)}\ 7
\textbf{(C)}\ 8
\textbf{(D)}\ 9
\textbf{(E)}\ 10$
