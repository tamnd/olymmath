---
tag: JCS99DPXBM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3313176
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21344
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2023
    source: hf-ai-mo-aops
    label: 2023 Balkan MO Shortlist
  - at: balkan-sl/2023
    source: hf-mathnet
    label: Balkan Mathematical Olympiad BMO 2023 Short List
---
Let $ABCD$ be a cyclic quadrilateral with circumcenter $O$ lying in the interior. Let $E$ and $F$ be the midpoints of the segments $BC$ and $AD$ , respectively. Let $X$ be the point lying on the same side of the line $EF$ as the vertex $C$ such that $\triangle EXF$ and $\triangle BOA$ are similar. Prove that $XC = XD$ .
