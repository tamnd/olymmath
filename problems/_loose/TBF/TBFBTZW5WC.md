---
tag: TBFBTZW5WC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3557017
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21358
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2024
    source: hf-ai-mo-aops
    label: 2024 Balkan MO Shortlist
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad 41st Balkan Mathematical Olympiad
---
Let $f: \pi \to \mathbb R$ be a function from the Euclidean plane to the real numbers such that $f(A)+f(B)+f(C)=f(O)+f(G)+f(H)$ for any acute triangle $\Delta ABC$ with circumcenter $O$ , centroid $G$ and orthocenter $H$ . Prove that $f$ is constant.
