---
tag: DYJ69MTQAQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h368355
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44101
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (2nd round)
---
In the night, stars in the sky are seen in different time intervals. Suppose for every $k$ stars ( $k>1$ ), at least $2$ of them can be seen in one moment. Prove that we can photograph $k-1$ pictures from the sky such that each of the mentioned stars is seen in at least one of the pictures.
(The number of stars is finite. Define the moments that the $n^{th}$ star is seen as $[a_n,b_n]$ that $a_n<b_n$ .)
