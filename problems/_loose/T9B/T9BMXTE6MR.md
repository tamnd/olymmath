---
tag: T9BMXTE6MR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h257164
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65217
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256690
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
In checking the petty cash a clerk counts $ q$ quarters, $ d$ dimes, $ n$ nickels, and $ c$ cents. Later he discovers that $ x$ of the nickels were counted as quarters and $ x$ of the dimes were counted as cents. To correct the total obtained the clerk must:

$ \textbf{(A)}\ \text{make no correction} \textbf{(B)}\ \text{subtract 11 cents} \textbf{(C)}\ \text{subtract 11}x\text{ cents}
\textbf{(D)}\ \text{add 11}x\text{ cents} \textbf{(E)}\ \text{add }x\text{ cents}$
