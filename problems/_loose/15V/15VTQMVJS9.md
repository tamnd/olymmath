---
tag: 15VTQMVJS9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230497
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2012
    source: hf-mathnet
    label: Belarus Belorusija 2012
---
Determine the greatest possible value of n that satisfies the following condition:
for any choice of $n$ subsets $M_1, ...,M_n$ of the set $M = \{1,2,...,n\}$ satisfying the conditions
i) $i \in M_i$ and
ii) $i \in M_j \Leftrightarrow j \notin M_i$ for all $i \ne j$,
there exist $M_k$ and $M_l$ such that $M_k \cup M_l = M$.

(Moscow regional olympiad,adopted)
