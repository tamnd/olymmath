---
tag: SB6G55MBTE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281600
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65316
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256789
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
If $ \sqrt{x - 1} - \sqrt{x + 1} + 1 = 0$ , then $ 4x$ equals:

$ \textbf{(A)}\ 5
\textbf{(B)}\ 4\sqrt{-1}
\textbf{(C)}\ 0
\textbf{(D)}\ 1\frac{1}{4}
\textbf{(E)}\ \text{no real value}$
