---
tag: J5P80N3VXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1150516
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14044
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2016
    source: hf-ai-mo-aops
    label: 2016 Hong Kong TST
---
Find all triples $(m,p,q)$ such that
\begin{align*}
2^mp^2 +1=q^7,
\end{align*}
where $p$ and $q$ are ptimes and $m$ is a positive integer.
