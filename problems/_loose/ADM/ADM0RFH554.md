---
tag: ADM0RFH554
kind: problem
type: answer
answer: m = n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 38th Iranian Mathematical Olympiad
---
Let $S$ be a set with $n$ elements and $P(S)$ be the set of all subsets of $S$. We want to partition $P(S)$ to $m$ parts such that if $A$, $B$ and $A \cup B$ are in the same part then $A = B$. Find the minimum value of $m$ so that such a partition exists.
