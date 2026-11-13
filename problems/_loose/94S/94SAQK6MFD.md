---
tag: 94SAQK6MFD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Mexico National Olympiad
    url: https://artofproblemsolving.com/community/c6h3198630
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=47411
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mx-omm/2023
    source: hf-ai-mo-aops
    label: 2023 Mexico National Olympiad
---
Let $n \ge 2$ be a positive integer. For every number from $1$ to $n$ , there is a card with this number and which is either black or white.
A magician can repeatedly perform the following move: For any two tiles with different number and different colour, he can replace the card with the smaller number by one identical to the other card.
For instance, when $n=5$ and the initial configuration is $(1B, 2B, 3W, 4B,5B)$ , the magician can choose $1B, 3W$ on the first move to obtain $(3W, 2B, 3W, 4B, 5B)$ and then $3W, 4B$ on the second move to obtain $(4B, 2B, 3W, 4B, 5B)$ .
Determine in terms of $n$ all possible lengths of sequences of moves from any possible initial configuration to any configuration in which no more move is possible.
