---
tag: TFPV4G6BRM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Bulgaria JBMO TST
    url: https://artofproblemsolving.com/community/c6h1663441
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16286
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-jbmo-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Bulgaria JBMO TST
---
The real numbers $a_1 \leq a_2 \leq \cdots \leq a_{672}$ are given such that $$ a_1 + a_2 + \cdots + a_{672} = 2018. $$ For any $n \leq 672$ , there are $n$ of these numbers with an integer sum. What is the smallest possible value of $a_{672}$ ?
