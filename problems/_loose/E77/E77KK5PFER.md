---
tag: E77KK5PFER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h587322
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40723
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237593
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/1994
    source: hf-ai-mo-aops
    label: 1994 Hong Kong TST
---
In a table-tennis tournament of $10$ contestants, any $2$ contestants meet only once.
We say that there is a winning triangle if the following situation occurs: $i$ -th contestant defeated the $j$ -th contestant, $j$ -th contestant defeated the $k$ -th contestant, and, $k$ -th contestant defeated the $i$ -th contestant.
Let, $W_i$ and $L_i $ be respectively the number of games won and lost by the $i$ -th contestant.
Suppose, $L_i+W_j\geq 8$ whenever the $j$ -th contestant defeats the $i$ -th contestant.
Prove that, there are exactly $40$ winning triangles in this tournament.
