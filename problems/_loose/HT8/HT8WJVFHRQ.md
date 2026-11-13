---
tag: HT8WJVFHRQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h603992
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11137
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2014
    source: hf-ai-mo-aops
    label: 2014 Harvard-MIT Mathematics Tournament
---
Compute $$\sum_{k=1}^{1007}\left(\cos\left(\dfrac{\pi k}{1007}\right)\right)^{2014}.$$
