---
tag: JGDEM4FFG8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281580
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65308
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256781
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
If $ y = \sqrt{x^2 - 2x + 1} + \sqrt{x^2 + 2x + 1}$ , then $ y$ is:

$ \textbf{(A)}\ 2x
\textbf{(B)}\ 2(x + 1)
\textbf{(C)}\ 0
\textbf{(D)}\ |x - 1| + |x + 1|
\textbf{(E)}\ \text{none of these}$
