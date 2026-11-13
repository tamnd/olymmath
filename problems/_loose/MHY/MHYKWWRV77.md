---
tag: MHYKWWRV77
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1983 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2966357
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39301
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236601
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1983
    source: hf-ai-mo-aops
    label: 1983 Bundeswettbewerb Mathematik
---
There are $k$ points in the interior of a pentagon. Together with the vertices of the pentagon they form a $(k + 5)$ -element set $M$ . The area of the pentagon is defined by connecting lines between the points of $M$ into sub-areas in such a way that it is divided into sub-areas in such a way that no sub-areas have a point on their interior of $M$ and contains exactly three points of $M$ on the boundary of each part. None of the connecting lines has a point in common with any other connecting line or pentagon side, which does not belong to $M$ . With such a decomposition of the pentagon, there can be an even number of connecting lines (including the pentagon sides) go out? The answer has to be justified.
