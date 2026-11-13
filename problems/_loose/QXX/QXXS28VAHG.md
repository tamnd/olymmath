---
tag: QXXS28VAHG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 24th Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h3502001
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50835
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154764
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 24th Philippine MO Qualifying Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 24th Philippine Mathematical Olympiad
---
The numbers $2,b,c,d,72$ are listed in increasing order so that $2,b,c$ form an arithmetic sequence, $b,c,d$ form a geometric sequence, and $c,d,72$ form a harmonic sequence (that is, a sequence whose reciprocals of its terms form an arithmetic sequence). What is the value of $b+c$ ? $\text{(a) }7 \text{(b) }13 \text{(c) }19 \text{(d) }25$
