---
tag: JNM5KZSJCN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3557399
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21366
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=229
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
Let $ABC$ be an acute-angled triangle with $AB < AC$ , orthocenter $H$ , circumcircle $\Gamma$ and circumcentre $O$ . Let $M$ be the midpoint of $BC$ and let $D$ be a point such that $ADOH$ is a parallellogram. Suppose that there exists a point $X$ on $\Gamma$ and on the opposite side of $DH$ to $A$ such that $\angle DXH + \angle DHA = 90^{\circ}$ . Let $Y$ be the midpoint of $OX$ . Prove that if $MY = OA$ , then $OA = 2OH$ .
