---
tag: CP4BF75S1N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h255759
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65118
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198288
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
If $ a,b,c$ are positive integers less than $ 10$ , then $ (10a + b)(10a + c) = 100a(a + 1) + bc$ if:
$ \textbf{(A)}\ b + c = 10 \textbf{(B)}\ b = c \textbf{(C)}\ a + b = 10 \textbf{(D)}\ a = b
\textbf{(E)}\ a + b + c = 10$
