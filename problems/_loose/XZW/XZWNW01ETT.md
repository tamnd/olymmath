---
tag: XZWNW01ETT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h22516
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66693
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199709
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
For each positive integer $n$ , let
$$a_n = \frac {(n + 9)!}{(n - 1)!}.$$
Let $k$ denote the smallest positive integer for which the rightmost nonzero digit of $a_k$ is odd. The rightmost nonzero digit of $a_k$ is $ \textbf{(A)}\ 1 \textbf{(B)}\ 3 \textbf{(C)}\ 5 \textbf{(D)}\ 7 \textbf{(E)}\ 9$
