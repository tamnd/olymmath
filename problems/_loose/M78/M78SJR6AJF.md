---
tag: M78SJR6AJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3557407
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21368
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=231
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
Let $ABC$ be a triangle and the points $K$ and $L$ on $AB$ , $M$ and $N$ on $BC$ , and $P$ and $Q$ on $AC$ be such that $AK = LB < \frac{1}{2}AB, BM = NC < \frac{1}{2}BC$ and $CP = QA < \frac{1}{2}AC$ . The intersections of $KN$ with $MQ$ and $LP$ are $R$ and $T$ respectively, and the intersections of $NP$ with $LM$ and $KQ$ are $D$ and $E$ , respectively. Prove that the lines $DR, BE$ and $CT$ are concurrent.
