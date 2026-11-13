---
tag: 16CZEMJJ5G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2225194
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54873
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2013
    source: hf-ai-mo-aops
    label: 2013 239 Open Mathematical Olympiad
---
Prove that if you choose $10^{100}$ points on a circle and arrange numbers from $1$ to $10^{100}$ on them in some order, then you can choose $100$ pairwise disjoint chords with ends at the selected points such that the sums of the numbers at the ends of all of them are equal to each other.
