---
tag: 5SEQHDCRBM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1675546
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16594
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2018
    source: hf-ai-mo-aops
    label: 2018 India IMO Training Camp
---
For an integer $n\ge 2$ find all $a_1,a_2,\cdots ,a_n, b_1,b_2,\cdots , b_n$ so that
(a) $0\le a_1\le a_2\le \cdots \le a_n\le 1\le b_1\le b_2\le \cdots \le b_n;$ (b) $\sum_{k=1}^n (a_k+b_k)=2n;$ (c) $\sum_{k=1}^n (a_k^2+b_k^2)=n^2+3n.$
