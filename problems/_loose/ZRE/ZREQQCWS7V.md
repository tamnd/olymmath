---
tag: ZREQQCWS7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h60578
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32870
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2004
    source: hf-ai-mo-aops
    label: 2004 Olympic Revenge
---
$a_0 = a_1 = 1$ and ${a_{n+1} . a_{n-1}} = a_n . (a_n + 1)$ for all positive integers n.

prove that $a_n$ is one integer for all positive integers n.
