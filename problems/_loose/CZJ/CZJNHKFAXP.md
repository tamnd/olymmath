---
tag: CZJNHKFAXP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1974 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2940267
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39226
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1974
    source: hf-ai-mo-aops
    label: 1974 Bundeswettbewerb Mathematik
---
There are $30$ apparently equal balls, $15$ of which have the weight $a$ and the remaining $15$ have the weight $b$ with $a \ne b$ . The balls are to be partitioned into two groups of $15$ , according to their weight. An assistant partitioned them into two groups, and we wish to check if this partition is correct. How can we check that with as few weighings as possible?
