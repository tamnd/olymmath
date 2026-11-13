---
tag: 1AHY9Q0CZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h608207
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11344
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Iran MO (3rd Round)
---
Consider a flat field on which there exist a valley in the form of an infinite strip with arbitrary width $\omega$ . There exist a polyhedron of diameter $d$ (Diameter in a polyhedron is the maximum distance from the points on the polyhedron) is in one side and a pit of diameter $d$ on the other side of the valley. We want to roll the polyhedron and put it into the pit such that the polyhedron and the field always meet each other in one point at least while rolling (If the polyhedron and the field meet each other in one point at least then the polyhedron would not fall into the valley). For crossing over the bridge, we have built a rectangular bridge with a width of $\frac{d}{10}$ over the bridge. Prove that we can always put the polyhedron into the pit considering the mentioned conditions.

(You will earn a good score if you prove the decision for $\omega = 0$ ).
