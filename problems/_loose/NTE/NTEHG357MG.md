---
tag: NTEHG357MG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2047479
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61113
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Taiwan TST Round 1
---
Assume $ a_{1} \ge a_{2} \ge \dots \ge a_{107} > 0 $ satisfy $ \sum\limits_{k=1}^{107}{a_{k}} \ge M $ and $ b_{107} \ge b_{106} \ge \dots \ge b_{1} > 0 $ satisfy $ \sum\limits_{k=1}^{107}{b_{k}} \le M $ . Prove that for any $ m \in \{1,2, \dots, 107\} $ , the arithmetic mean of the following numbers $$ \frac{a_{1}}{b_{1}}, \frac{a_{2}}{b_{2}}, \dots, \frac{a_{m}}{b_{m}} $$ is greater than or equal to $ \frac{M}{N} $
