---
tag: KR2EVH6T8H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282717
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65366
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198462
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
If, in the expression $ x^2 - 3$ , $ x$ increases or decreases by a positive amount of $ a$ , the expression changes by an amount:

$ \textbf{(A)}\ {\pm 2ax + a^2}
\textbf{(B)}\ {2ax \pm a^2}
\textbf{(C)}\ {\pm a^2 - 3}
\textbf{(D)}\ {(x + a)^2 - 3}
\textbf{(E)}\ {(x - a)^2 - 3}$
