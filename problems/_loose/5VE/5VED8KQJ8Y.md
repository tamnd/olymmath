---
tag: 5VED8KQJ8Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h454570
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4187
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2009
    source: hf-ai-mo-aops
    label: 2009 Stanford Mathematics Tournament
---
In the 2009 Stanford Olympics, Willy and Sammy are two bikers. The circular race track has two
lanes, the inner lane with radius 11, and the outer with radius 12. Willy will start on the inner lane,
and Sammy on the outer. They will race for one complete lap, measured by the inner track.
What is the square of the distance between Willy and Sammy's starting positions so that they will both race
the same distance? Assume that they are of point size and ride perfectly along their respective lanes
