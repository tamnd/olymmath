---
tag: T00FYR2FXS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Taiwan National Olympiad
    url: https://artofproblemsolving.com/community/c6h80319
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61042
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Taiwan National Olympiad
---
$a_1, a_2, ..., a_{95}$ are positive reals. Show that
$ \sum_{k=1}^{95}{a_k} \le 94+ \prod_{k=1}^{95}{\max{\{1,a_k\}}}$
