---
tag: NPGYV5TQZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 CentroAmerican
    url: https://artofproblemsolving.com/community/c6h381870
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22021
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: centro/2004
    source: hf-ai-mo-aops
    label: 2004 CentroAmerican
---
Define the sequence $(a_n)$ as follows: $a_0=a_1=1$ and for $k\ge 2$ , $a_k=a_{k-1}+a_{k-2}+1$ .
Determine how many integers between $1$ and $2004$ inclusive can be expressed as $a_m+a_n$ with $m$ and $n$ positive integers and $m\not= n$ .
