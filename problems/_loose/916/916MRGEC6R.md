---
tag: 916MRGEC6R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 IMAC Arhimede
    url: https://artofproblemsolving.com/community/c6h414622
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6525
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imac/2011
    source: hf-ai-mo-aops
    label: 2011 IMAC Arhimede
---
Let $ABCD$ be a cyclic quadrilatetral inscribed in a circle $k$ . Let $M$ and $N$ be the midpoints of the arcs $AB$ and $CD$ which do not contain $C$ and $A$ respectively. If $MN$ meets side $AB$ at $P$ , then show that $\frac{AP}{BP}=\frac{AC+AD}{BC+BD}$
