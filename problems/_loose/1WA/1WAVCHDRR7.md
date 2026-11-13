---
tag: 1WAVCHDRR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1947 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1879042
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56613
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249511
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1947
    source: hf-ai-mo-aops
    label: 1947 Moscow Mathematical Olympiad
---
Find the coefficient of $x^2$ after expansion and collecting the terms of the following expression (there are $k$ pairs of parentheses): $$ ((... (((x - 2)^2 - 2)^2 -2)^2 -... -2)^2 - 2)^2 $$
