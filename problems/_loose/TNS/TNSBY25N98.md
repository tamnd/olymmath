---
tag: TNSBY25N98
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h592608
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66111
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199115
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
What is the smallest positive integer $n$ such that $\sqrt{n}-\sqrt{n-1}<.01$ ? $\textbf{(A) }2499 \textbf{(B) }2500 \textbf{(C) }2501 \textbf{(D) }10,000 \textbf{(E) }\text{There is no such integer}$
