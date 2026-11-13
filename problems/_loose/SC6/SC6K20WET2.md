---
tag: SC6K20WET2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Abels Math Contest (Norwegian MO) Final
    url: https://artofproblemsolving.com/community/c6h1909895
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9026
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2013
    source: hf-ai-mo-aops
    label: 2013 Abels Math Contest (Norwegian MO) Final
---
An ordered quadruple $(P_1, P_2, P_3, P_4)$ of corners in a regular $2013$ -gon is called *crossing* if the four corners are all different, and the line segment from $P_1$ to $P_2$ intersects the line segment from $P_3$ to $P_4$ . How many *crossing* quadruples are there in the $2013$ -gon?
