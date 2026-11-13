---
tag: FEXCPYNXR9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h5753
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25454
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2003
    source: hf-ai-mo-aops
    label: 2003 IMO Shortlist
---
Let $D_1$ , $D_2$ , ..., $D_n$ be closed discs in the plane. (A closed disc is the region limited by a circle, taken jointly with this circle.) Suppose that every point in the plane is contained in at most $2003$ discs $D_i$ . Prove that there exists a disc $D_k$ which intersects at most $7\cdot 2003 - 1 = 14020$ other discs $D_i$ .
