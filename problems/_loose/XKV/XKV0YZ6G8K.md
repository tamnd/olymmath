---
tag: XKV0YZ6G8K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250873
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $ABC$ be a triangle inscribed in the circle $(O)$, with orthocenter $H$. Let d be an arbitrary line which passes through $H$ and intersects $(O)$ at $P$ and $Q$. Draw diameter $AA'$ of circle $(O)$. Lines $A'P$ and $A'Q$ meet $BC$ at $K$ and $L$, respectively. Prove that $O, K, L$ and $A'$ are concyclic.
