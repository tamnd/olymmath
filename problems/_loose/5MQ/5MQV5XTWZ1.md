---
tag: 5MQV5XTWZ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2017927
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36139
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234687
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1994
    source: hf-ai-mo-aops
    label: 1994 National High School Mathematics League
---
Sequence $(a_n)$ satisfies that $3a_{n+1}+a_n=4(n\geq1),a_1=9$ , let $S_n=\sum_{i=1}^{n}a_i$ , then the minumum value of $n$ such that $|S_n-n-6|<\frac{1}{125}$ is $\text{(A)}5 \text{(B)}6 \text{(C)}7 \text{(D)}8$
