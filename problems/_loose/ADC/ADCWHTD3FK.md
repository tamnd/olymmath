---
tag: ADCWHTD3FK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3313177
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21345
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=213
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
Let $O$ and $H$ be the circumcenter and orthocenter of a scalene triangle $ABC$ , respectively. Let $D$ be the intersection point of the lines $AH$ and $BC$ . Suppose the line $OH$ meets the side $BC$ at $X$ . Let $P$ and $Q$ be the second intersection points of the circumcircles of $\triangle BDH$ and $\triangle CDH$ with the circumcircle of $\triangle ABC$ , respectively. Show that the four points $P, D, Q$ and $X$ lie on a circle.
