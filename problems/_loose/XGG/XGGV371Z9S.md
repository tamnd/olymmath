---
tag: XGGV371Z9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Bulgaria EGMO TST
    url: https://artofproblemsolving.com/community/c6h54041
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32947
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=157169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-egmo-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Bulgaria EGMO TST
---
Let $S$ be a set with 2002 elements, and let $N$ be an integer with $0 \leq N \leq 2^{2002}$ . Prove that it is possible to color every subset of $S$ either black or white so that the following conditions hold:

(a) the union of any two white subsets is white;
(b) the union of any two black subsets is black;
(c) there are exactly $N$ white subsets.
