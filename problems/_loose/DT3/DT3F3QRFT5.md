---
tag: DT3F3QRFT5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1975 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h367917
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25188
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1975
    source: hf-ai-mo-aops
    label: 1975 IMO Shortlist
---
Consider on the first quadrant of the trigonometric circle the arcs $AM_1 = x_1,AM_2 = x_2,AM_3 = x_3, \ldots , AM_v = x_v$ , such that $x_1 < x_2 < x_3 < \cdots < x_v$ . Prove that
$$\sum_{i=0}^{v-1} \sin 2x_i - \sum_{i=0}^{v-1} \sin (x_i- x_{i+1}) < \frac{\pi}{2} + \sum_{i=0}^{v-1} \sin (x_i + x_{i+1})$$
