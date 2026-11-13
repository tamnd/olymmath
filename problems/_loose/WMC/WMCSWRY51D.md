---
tag: WMCSWRY51D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2009034
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54405
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1995
    source: hf-ai-mo-aops
    label: 1995 Romania Team Selection Test
---
Let $a_1, a_2,...., a_n$ be distinct positive integers.
Prove that $(a_1^5 + ...+ a_n^5) + (a_1^7 + ...+ a_n^7) \ge 2(a_1^3 + ...+ a_n^3)^2$ and find the cases of equality.
