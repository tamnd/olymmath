---
tag: 5QBT478BTG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h2388895
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31278
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230716
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Belarusian National Olympiad
---
a) $n$ $2\times2$ squares are drawn on the Cartesian plane. The sides of these squares are parallel to the coordinate axes. It is known that the center of any square is not an inner point of any other square. Let $\Pi$ be a rectangle such that it contains all these $n$ squares and its sides are parallel to the coordinate axes.
Prove that the perimeter of $\Pi$ is greater than or equal to $4(\sqrt{n}+1)$ .

b) Prove the sharp estimate: the perimeter of $\Pi$ is greater than or equal to $2\lceil \sqrt{n}+1) \rceil$

(here $\lceil a\rceil$ stands for the smallest integer which is greater than or equal to $a$ ).
