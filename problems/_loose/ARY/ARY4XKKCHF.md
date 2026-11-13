---
tag: ARY4XKKCHF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h445876
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3482
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205679
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=39
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2009
    source: hf-ai-mo-aops
    label: 2009 Greece National Olympiad
  - at: gr-hms
    source: hf-mathnet
    label: Greece 26th Hellenic Mathematical Olympiad
---
Consider pairwise distinct complex numbers $z_1,z_2,z_3,z_4,z_5,z_6$ whose images $A_1,A_2,A_3,A_4,A_5,A_6$ respectively are succesive points on the circle centered at $O(0,0)$ and having radius $r>0.$ If $w$ is a root of the equation $z^2+z+1=0$ and the next equalities hold $$z_1w^2+z_3w+z_5=0 z_2w^2+z_4w+z_6=0$$ prove that**a)** Triangle $A_1A_3A_5$ is equilateral**b)** $$|z_1-z_2|+|z_2-z_3|+|z_3-z_4|+|z_4-z_5|+z_5-z_6|+|z_6-z_1|=3|z_1-z_4|=3|z_2-z_5|=3|z_3-z_6|.$$
