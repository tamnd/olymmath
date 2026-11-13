---
tag: V2MM4ERRDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h582282
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11579
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Let $N$ denote the number of ordered pairs of sets $(A, B)$ such that $A \cup B$ is a size- $999$ subset of $\{1,2,\dots,1997\}$ and $(A \cap B) \cap \{1,2\} = \{1\}$ . If $m$ and $k$ are integers such that $3^m5^k$ divides $N$ , compute the the largest possible value of $m+k$ .

*Proposed by Michael Tang*
