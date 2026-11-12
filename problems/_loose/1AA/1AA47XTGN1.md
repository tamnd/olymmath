---
tag: 1AA47XTGN1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1225752
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13826
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
The $\emph{Stooge sort}$ is a particularly inefficient recursive sorting algorithm defined as follows: given an array $A$ of size $n$ , we swap the first and last elements if they are out of order; we then (if $n\ge3$ ) Stooge sort the first $\lceil\tfrac{2n}3\rceil$ elements, then the last $\lceil\tfrac{2n}3\rceil$ , then the first $\lceil\tfrac{2n}3\rceil$ elements again. Given that this runs in $O(n^\alpha)$ , where $\alpha$ is minimal, find the value of $(243/32)^\alpha$ .
