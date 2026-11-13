---
tag: J6YSNYMQP9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h110421
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44302
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
The National Foundation of Happiness (NFoH) wants to estimate the happiness of people of country. NFoH selected $n$ random persons, and on every morning asked from each of them whether she is happy or not. On any two distinct days, exactly half of the persons gave the same answer. Show that after $k$ days, there were at most $n-\frac{n}{k}$ persons whose "yes" answers equals their "no" answers.
