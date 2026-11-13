---
tag: V5NETVEGM6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h2072149
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32860
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231907
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2003
    source: hf-ai-mo-aops
    label: 2003 Olympic Revenge
---
Let $x_n$ the sequence defined by any nonnegatine integer $x_0$ and $x_{n+1}=1+\prod_{0 \leq i \leq n}{x_i}$ Show that there exists prime $p$ such that $p\not|x_n$ for any $n$ .
