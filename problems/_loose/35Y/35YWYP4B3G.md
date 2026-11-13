---
tag: 35YWYP4B3G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2032355
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40381
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2011
    source: hf-ai-mo-aops
    label: 2011 Greece Junior Math Olympiad
---
We consider the set of four-digit positive integers $x =\overline{abcd}$ with digits different than zero and pairwise different. We also consider the integers $y = \overline{dcba}$ and we suppose that $x > y$ . Find the greatest and the lowest value of the difference $x-y$ , as well as the corresponding four-digit integers $x,y$ for which these values are obtained.
