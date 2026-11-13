---
tag: 5CPFN01SBJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221775
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13777
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
1007 distinct potatoes are chosen independently and randomly from a box of 2016 potatoes numbered $1, 2, \dots, 2016$ , with $p$ being the smallest chosen potato. Then, potatoes are drawn one at a time from the remaining 1009 until the first one with value $q < p$ is drawn. If no such $q$ exists, let $S = 1$ . Otherwise, let $S = pq$ . Then given that the expected value of $S$ can be expressed as simplified fraction $\tfrac{m}{n}$ , find $m+n$ .
