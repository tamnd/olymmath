---
tag: HZWE6YZD6N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h445225
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66522
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199517
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
How many pairs of positive integers $(a,b)$ with $a + b \le 100$ satisfy the equation $\frac{a + b^{-1}}{a^{-1} + b} = 13$ ? $ \textbf{(A)}\ 1 \textbf{(B)}\ 5 \textbf{(C)}\ 7 \textbf{(D)}\ 9 \textbf{(E)}\ 13 $
