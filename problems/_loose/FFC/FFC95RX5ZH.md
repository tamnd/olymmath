---
tag: FFC95RX5ZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3313180
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21346
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=215
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
Let $ABC$ be an acute triangle ( $AB < BC < AC$ ) with circumcircle $\Gamma$ . Assume there exists $X \in AC$ satisfying $AB=BX$ and $AX=BC$ . Points $D, E \in \Gamma$ are taken such that $\angle ADB<90^{\circ}$ , $DA=DB$ and $BC=CE$ . Let $P$ be the intersection point of $AE$ with the tangent line to $\Gamma$ at $B$ , and let $Q$ be the intersection point of $AB$ with tangent line to $\Gamma$ at $C$ . Show that the projection of $D$ onto $PQ$ lies on the circumcircle of $\triangle PAB$ .
