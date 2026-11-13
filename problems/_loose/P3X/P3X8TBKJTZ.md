---
tag: P3X8TBKJTZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h390551
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5931
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208081
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
$N$ horsemen are riding in the same direction along a circular road. Their speeds are constant and pairwise distinct. There is a single point on the road where the horsemen can surpass one another. Can they ride in this fashion for arbitrarily long time? Consider the cases: $(a) N = 3;$ $(b) N = 10.$
