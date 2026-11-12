---
tag: M0FXSS2D5N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1528956
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26002
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11138
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2009
    source: hf-ai-mo-aops
    label: 2009 JBMO Shortlist
  - at: jbmo-sl/2009
    source: hf-numina-olympiads
    label: JBMO-SL
---
Determine all prime numbers $p_1, p_2,..., p_{12}, p_{13}, p_1 \le p_2 \le ... \le p_{12} \le p_{13}$ , such
that $p_1^2+ p_2^2+ ... + p_{12}^2 = p_{13}^2$ and one of them is equal to $2p_1 + p_9$ .
