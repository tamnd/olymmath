---
tag: KYDKH6ZWH7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h110415
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44297
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
Let $A$ be a family of subsets of $\{1,2,\ldots,n\}$ such that no member of $A$ is contained in another. Sperner's Theorem states that $|A|\leq{n\choose{\lfloor\frac{n}{2}\rfloor}}$ . Find all the families for which the equality holds.
