---
tag: KYFDQ3DAS7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2916293
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34406
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2002
    source: hf-ai-mo-aops
    label: 2002 Chile National Olympiad
---
A convex polygon of sides $\ell_1, \ell_2, ..., \ell_n$ is called *ordered* if for all reordering $( \sigma (1), \sigma (2), ..., \sigma (n))$ of the set $(1, 2,..., n)$ there exists a point $P$ inside the polygon such that $d_{\sigma (1)} < d_{\sigma (2)} <...< d_{\sigma (n)}$ , where $d_i$ represents the distance between $P$ and side $\ell_i$ . Find all the convex ordered polygons.
