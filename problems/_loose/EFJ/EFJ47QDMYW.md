---
tag: EFJ47QDMYW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h1242659
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35311
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2013
    source: hf-ai-mo-aops
    label: 2013 China Second Round Olympiad
---
$n$ students take a test with $m$ questions, where $m,n\ge 2$ are integers. The score given to every question is as such: for a certain question, if $x$ students fails to answer it correctly, then those who answer it correctly scores $x$ points, while those who answer it wrongly scores $0$ . The score of a student is the sum of his scores for the $m$ questions. Arrange the scores in descending order $p_1\ge p_2\ge \ldots \ge p_n$ . Find the maximum value of $p_1+p_n$ .
