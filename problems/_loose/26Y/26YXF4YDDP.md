---
tag: 26YXF4YDDP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1954 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1895162
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56768
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1954
    source: hf-ai-mo-aops
    label: 1954 Moscow Mathematical Olympiad
---
Consider five segments $AB_1, AB_2, AB_3, AB_4, AB_5$ . From each point $B_i$ there can exit either $5$ segments or no segments at all, so that the endpoints of any two segments of the resulting graph (system of segments) do not coincide. Can the number of free endpoints of the segments thus constructed be equal to $1001$ ? (A free endpoint is an endpoint from which no segment begins.)
