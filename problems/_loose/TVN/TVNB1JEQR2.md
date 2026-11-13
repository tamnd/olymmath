---
tag: TVNB1JEQR2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180001
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 65th Romanian Mathematical Olympiad
---
In triangle $ABC$, consider the points $M, N \in (AB)$, $P, Q \in (BC)$, and $S, R \in (AC)$ such that $AM = CR$, $AN = CS$, $\angle MQB \equiv \angle RQC$, and $\angle NPB \equiv \angle SPC$. Show that if $MQ + QR = NP + PS$, then triangle $ABC$ is isosceles.
