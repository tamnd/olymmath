---
tag: CFG51T3TFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h80397
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65716
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
The negation of the proposition "For all pairs of real numbers $a$ , $b$ , if $a=0$ , then $ab=0$ " is: There are real numbers $a,b$ such that

$\text{(A)} \ a\ne0,ab\ne 0 ~~\text{(B)} \ a\ne 0, ab=0 ~~ \text{(C)} \ a=0,ab\ne 0$
$\text{(D)} \ ab\ne0,a\ne0 ~~\text{(E)} \ ab=0,a\ne0$
