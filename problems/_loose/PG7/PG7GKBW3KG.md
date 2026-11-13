---
tag: PG7GKBW3KG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282751
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65387
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198485
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
Given the true statements: (1) If $ a$ is greater than $ b$ , then $ c$ is greater than $ d$ (2) If $ c$ is less than $ d$ , then $ e$ is greater than $ f$ . A valid conclusion is:

$ \textbf{(A)}\ \text{If }{a}\text{ is less than }{b}\text{, then }{e}\text{ is greater than }{f}
\textbf{(B)}\ \text{If }{e}\text{ is greater than }{f}\text{, then }{a}\text{ is less than }{b}
\textbf{(C)}\ \text{If }{e}\text{ is less than }{f}\text{, then }{a}\text{ is greater than }{b}
\textbf{(D)}\ \text{If }{a}\text{ is greater than }{b}\text{, then }{e}\text{ is less than }{f}
\textbf{(E)}\ \text{none of these}$
