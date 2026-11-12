---
tag: XB4C5M2JFM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 BMT Fall
    url: https://artofproblemsolving.com/community/c6h2753690
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2020
    source: hf-ai-mo-aops
    label: 2020 BMT Fall
---
For positive integers $N$ and $m$ , where $m \le N$ , define $$ a_{m,N} =\frac{1}{{N+1 \choose m}} \sum_{i=m-1}^{N-1} \frac{ {i \choose m-1}}{N - i} $$ Compute the smallest positive integer $N$ such that $$ \sum^N_{m=1}a_{m,N} >\frac{2020N}{N +1} $$
