---
tag: G32GF6GHKB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Bulgaria JBMO TST
    url: https://artofproblemsolving.com/community/c6h2845270
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32982
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-jbmo-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Bulgaria JBMO TST
---
There are $n\leq 99$ people around a circular table. At every moment everyone can either be truthful (always says the truth) or a liar (always lies). Initially some of people (possibly none) are truthful and the rest are liars. At every minute everyone answers at the same time the question "Is your left neighbour truthful or a liar?" and then becomes the same type of person as his answer. Determine the largest $n$ for which, no matter who are the truthful people in the beginning, at some point everyone will become truthful forever.
