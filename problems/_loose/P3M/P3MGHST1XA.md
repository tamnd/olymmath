---
tag: P3MGHST1XA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h289528
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=62913
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/1997
    source: hf-ai-mo-aops
    label: 1997 Ukraine National Mathematical Olympiad
---
There are $ n$ candidates on a table. Petrik and Mikola alternately take candies from the table according to the following rule. Petrik starts by taking one candy; then Mikola takes $ i$ candies, where $ i$ divides $ 2$ , then Petrik takes $ j$ candies, where $ j$ divides $ 3$ , and so on. The player who takes the last candy wins the game. Which player has a winning strategy?
