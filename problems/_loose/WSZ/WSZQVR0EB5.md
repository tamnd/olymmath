---
tag: WSZQVR0EB5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h147481
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2006
    source: hf-ai-mo-aops
    label: 2006 IberoAmerican
---
The numbers $1, 2, \ldots , n^{2}$ are written in the squares of an $n \times n$ board in some order. Initially there is a token on the square labelled with $n^{2}.$ In each step, the token can be moved to any adjacent square (by side). At the beginning, the token is moved to the square labelled with the number $1$ along a path with the minimum number of steps. Then it is moved to the square labelled with $2,$ then to square $3,$ etc, always taking the shortest path, until it returns to the initial square. If the total trip takes $N$ steps, find the smallest and greatest possible values of $N.$
