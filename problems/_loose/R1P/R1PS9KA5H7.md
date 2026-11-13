---
tag: R1PS9KA5H7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3107947
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50402
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246057
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Peru Cono Sur TST
---
Let $n$ be a positive integer. Andrés has $n+1$ cards and each of them has a positive integer written, in such a way that the sum of the $n+1$ numbers is $3n$ . Show that Andrés can place one or more cards in a red box and one or more cards in a blue box in such a way that the sum of the numbers of the cards in the red box is equal to twice the sum of the numbers of the cards in the blue box.
Clarification: Some of Andrés's letters can be left out of the boxes.
