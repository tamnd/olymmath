---
tag: RQ3EFXB5GD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585536
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11661
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213618
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Let $ABCD$ be a tetrahedron whose six side lengths are all integers, and let $N$ denote the sum of these side lengths. There exists a point $P$ inside $ABCD$ such that the feet from $P$ onto the faces of the tetrahedron are the orthocenter of $\triangle ABC$ , centroid of $\triangle BCD$ , circumcenter of $\triangle CDA$ , and orthocenter of $\triangle DAB$ . If $CD = 3$ and $N < 100{,}000$ , determine the maximum possible value of $N$ .

*Proposed by Sammy Luo and Evan Chen*
