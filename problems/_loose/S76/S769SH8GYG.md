---
tag: S769SH8GYG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h403510
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54452
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1998
    source: hf-ai-mo-aops
    label: 1998 Romania Team Selection Test
---
Let $m\ge 2$ be an integer. Find the smallest positive integer $n>m$ such that for any partition with two classes of the set $\{ m,m+1,\ldots ,n \}$ at least one of these classes contains three numbers $a,b,c$ (not necessarily different) such that $a^b=c$ .

*Ciprian Manolescu*
