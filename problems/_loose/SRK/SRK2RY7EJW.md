---
tag: SRK2RY7EJW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h473347
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7168
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209287
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2011
    source: hf-ai-mo-aops
    label: 2011 Romania Team Selection Test
  - at: ro-tst
    source: hf-mathnet
    label: Romania 62nd NMO SELECTION TESTS FOR THE BALKAN AND INTERNATIONAL MATHEMATICAL OLYMPIADS
---
Let $ABC$ be a triangle such that $AB<AC$ . The perpendicular bisector of the side $BC$ meets the side $AC$ at the point $D$ , and the (interior) bisectrix of the angle $ADB$ meets the circumcircle $ABC$ at the point $E$ . Prove that the (interior) bisectrix of the angle $AEB$ and the line through the incentres of the triangles $ADE$ and $BDE$ are perpendicular.
