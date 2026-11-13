---
tag: FHF2R8DQF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1968 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368346
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25153
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1968
    source: hf-ai-mo-aops
    label: 1968 IMO Shortlist
---
Let $h_n$ be the apothem (distance from the center to one of the sides) of a regular $n$ -gon ( $n \geq 3$ ) inscribed in a circle of radius $r$ . Prove the inequality
$$(n + 1)h_n+1 - nh_n > r.$$
Also prove that if $r$ on the right side is replaced with a greater number, the inequality will not remain true for all $n \geq 3.$
