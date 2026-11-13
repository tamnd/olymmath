---
tag: 1ZASYAHYM1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h485119
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71259
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=145955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/1999
    source: hf-ai-mo-aops
    label: 1999 Harvard-MIT Mathematics Tournament
---
For any finite set $S$ , let $f(S)$ be the sum of the elements of $S$ (if $S$ is empty then $f(S)=0$ ). Find the sum over all subsets $E$ of $S$ of $\dfrac{f(E)}{f(S)}$ for $S=\{1,2,\cdots,1999\}$ .
