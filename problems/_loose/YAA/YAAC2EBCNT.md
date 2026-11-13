---
tag: YAAC2EBCNT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h2112188
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7145
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2011
    source: hf-ai-mo-aops
    label: 2011 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 62nd ROMANIAN MATHEMATICAL OLYMPIAD
---
In the convex quadrilateral $ABCD$ we have that $\angle BCD = \angle ADC \ge 90 ^o$ . The bisectors of $\angle BAD$ and $\angle ABC$ intersect in $M$ . Prove that if $M \in CD$ , then $M$ is the middle of $CD$ .
