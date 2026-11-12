---
tag: 7SEWGYYRFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China Girls Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3377736
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-gmo/2024
    source: hf-ai-mo-aops
    label: 2024 China Girls Math Olympiad
---
Let $\{a_n\}$ be a sequence defined by $a_1=0$ and $$ a_n=\frac{1}{n}+\frac{1}{\lceil \frac{n}{2} \rceil}\sum_{k=1}^{\lceil \frac{n}{2} \rceil}a_k $$ for any positive integer $n$ . Find the maximal term of this sequence.
