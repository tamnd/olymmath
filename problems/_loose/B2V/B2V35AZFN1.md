---
tag: B2V35AZFN1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460014
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8426
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210490
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Let $ABC$ be a triangle inscribed in circle $\Gamma$ , centered at $O$ with radius $333.$ Let $M$ be the midpoint of $AB$ , $N$ be the midpoint of $AC$ , and $D$ be the point where line $AO$ intersects $BC$ . Given that lines $MN$ and $BO$ concur on $\Gamma$ and that $BC = 665$ , find the length of segment $AD$ .

*Author: Alex Zhu*
