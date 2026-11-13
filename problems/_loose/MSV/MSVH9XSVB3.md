---
tag: MSVH9XSVB3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2128763
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54924
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2017
    source: hf-ai-mo-aops
    label: 2017 239 Open Mathematical Olympiad
---
Denote every permutation of $1,2,\dots, n$ as $\sigma =(a_1,a_2,\dots,n)$ . Prove that the sum $$ \sum \frac{1}{(a_1)(a_1+a_2)(a_1+a_2+a_3)\dots(a_1+a_2+\dots+a_n)} $$ taken over all possible permutations $\sigma$ equals $\frac{1}{n!}$ .
