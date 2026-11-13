---
tag: 2YARTNX1FE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h1994734
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39414
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236714
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1998
    source: hf-ai-mo-aops
    label: 1998 Bundeswettbewerb Mathematik
---
Let $3(2^n -1)$ points be selected in the interior of a polyhedron $P$ with volume $2^n$ , where n is a positive integer. Prove that there exists a convex polyhedron $U$ with volume $1$ , contained entirely inside $P$ , which contains none of the selected points.
