---
tag: 9H9RWTQR89
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42552
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35672
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1991
    source: hf-ai-mo-aops
    label: 1991 China Team Selection Test
---
We choose 5 points $A_1, A_2, \ldots, A_5$ on a circumference of radius 1 and centre $O.$ $P$ is a point inside the circle. Denote $Q_i$ as the intersection of $A_iA_{i+2}$ and $A_{i+1}P$ , where $A_7 = A_2$ and $A_6 = A_1.$ Let $OQ_i = d_i, i = 1,2, \ldots, 5.$ Find the product $\prod^5_{i=1} A_iQ_i$ in terms of $d_i.$
