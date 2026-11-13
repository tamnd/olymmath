---
tag: BZNKTBKXH6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h250657
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65667
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257140
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
Given the sequence $ 10^{\frac {1}{11}},10^{\frac {2}{11}},10^{\frac {3}{11}},\ldots,10^{\frac {n}{11}}$ , the smallest value of $ n$ such that the product of the first $ n$ members of this sequence exceeds $ 100000$ is:

$ \textbf{(A)}\ 7 \textbf{(B)}\ 8 \textbf{(C)}\ 9 \textbf{(D)}\ 10 \textbf{(E)}\ 11$
