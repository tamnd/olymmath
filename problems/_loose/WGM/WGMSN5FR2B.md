---
tag: WGMSN5FR2B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h67929
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66710
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199698
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
How many triangles have area $ 10$ and vertices at $ (-5,0)$ , $ (5,0)$ , and $ (5\cos \theta, 5\sin \theta)$ for some angle $ \theta$ ?

$ \textbf{(A)}\ 0 \textbf{(B)}\ 2 \textbf{(C)}\ 4 \textbf{(D)}\ 6 \textbf{(E)}\ 8$
