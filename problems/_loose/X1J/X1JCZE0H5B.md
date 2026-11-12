---
tag: X1JCZE0H5B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1528890
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25971
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11110
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2008
    source: hf-ai-mo-aops
    label: 2008 JBMO Shortlist
  - at: jbmo-sl/2008
    source: hf-numina-olympiads
    label: JBMO-SL
---
Let $s(a)$ denote the sum of digits of a given positive integer a. The sequence $a_1, a_2,..., a_n, ...$ of positive integers is such that $a_{n+1} = a_n+s(a_n)$ for each positive integer $n$ . Find the greatest possible n for which it is possible to have $a_n = 2008$ .
