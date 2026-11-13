---
tag: 30NBX24EYM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h546365
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9581
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2013
    source: hf-ai-mo-aops
    label: 2013 India IMO Training Camp
---
Let $n \ge 2$ be an integer. There are $n$ beads numbered $1, 2, \ldots, n$ . Two necklaces made out of some of these beads are considered the same if we can get one by rotating the other (with no flipping allowed). For example, with $n \ge 5$ , the necklace with four beads $1, 5, 3, 2$ in the clockwise order is same as the one with $5, 3, 2, 1$ in the clockwise order, but is different from the one with $1, 2, 3, 5$ in the clockwise order.

We denote by $D_0(n)$ (respectively $D_1(n)$ ) the number of ways in which we can use all the beads to make an even number (resp. an odd number) of necklaces each of length at least $3$ . Prove that $n - 1$ divides $D_1(n) - D_0(n)$ .
