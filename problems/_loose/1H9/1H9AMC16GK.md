---
tag: 1H9AMC16GK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h527636
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9283
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2013
    source: hf-ai-mo-aops
    label: 2013 China Team Selection Test
---
$101$ people, sitting at a round table in any order, had $1,2,... , 101$ cards, respectively.
A transfer is someone give one card to one of the two people adjacent to him.
Find the smallest positive integer $k$ such that there always can through no more than $ k $ times transfer, each person hold cards of the same number, regardless of the sitting order.
