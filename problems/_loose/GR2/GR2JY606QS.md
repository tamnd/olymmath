---
tag: GR2JY606QS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h250622
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65656
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257129
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
Let $ n$ be the number of number-pairs $ (x,y)$ which satisfy $ 5y - 3x = 15$ and $ x^2 + y^2 \le 16$ . Then $ n$ is:

$ \textbf{(A)}\ 0 \textbf{(B)}\ 1 \textbf{(C)}\ 2 \textbf{(D)}\ \text{more than two, but finite} \textbf{(E)}\ \text{greater than any finite number}$
