---
tag: Y9V7AQP90V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3501178
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2001
    source: hf-ai-mo-aops
    label: 2001 China Team Selection Test
---
Given any odd integer $n>3$ that is not divisible by $3$ , determine whether it is possible to fill an $n \times n$ grid with $n^2$ integers such that (each cell filled with a number, the number at the intersection of the $i$ -th row and $j$ -th column is denoted as $a_{ij}$ ): $\cdot$ Each row and each column contains a permutation of the numbers $0,1,2, \cdots, n-1$ . $\cdot$ The pairs $(a_{ij},a_{ji})$ for $i<j$ are all distinct.
