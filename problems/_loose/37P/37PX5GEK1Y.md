---
tag: 37PX5GEK1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560342
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10098
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $ABCD$ be a quadrilateral with $AD = 20$ and $BC = 13$ . The area of $\triangle ABC$ is $338$ and the area of $\triangle DBC$ is $212$ . Compute the smallest possible perimeter of $ABCD$ .

*Proposed by Evan Chen*
