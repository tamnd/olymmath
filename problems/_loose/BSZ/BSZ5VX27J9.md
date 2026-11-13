---
tag: BSZ5VX27J9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282728
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65373
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198470
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
If $ xy = b$ and $ \frac{1}{x^2} + \frac{1}{y^2} = a$ , then $ (x + y)^2$ equals:

$ \textbf{(A)}\ (a + 2b)^2
\textbf{(B)}\ a^2 + b^2
\textbf{(C)}\ b(ab + 2)
\textbf{(D)}\ ab(b + 2)
\textbf{(E)}\ \frac{1}{a} + 2b$
