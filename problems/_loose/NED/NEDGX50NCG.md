---
tag: NEDGX50NCG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h418608
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4906
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207064
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2010
    source: hf-ai-mo-aops
    label: 2010 Germany Team Selection Test
---
We are given $m,n \in \mathbb{Z}^+.$ Show the number of solution $4-$ tuples $(a,b,c,d)$ of the system

\begin{align*}
ab + bc + cd - (ca + ad + db) &= m
2 \left(a^2 + b^2 + c^2 + d^2 \right) - (ab + ac + ad + bc + bd + cd) &= n
\end{align*}

is divisible by 10.
