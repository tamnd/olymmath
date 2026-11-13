---
tag: 4HNCHP70ED
kind: problem
type: answer
answer: \frac{A_3B_1}{A_3B_2} = \frac{C_3B_1}{C_3B_2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $ \triangle ABC$ with point $ D$ inside. Let $ A_0=AD\cap BC$, $ B_0=BD\cap AC$, $ C_0 =CD\cap AB$ and $ A_1$, $ B_1$, $ C_1$, $ A_2$, $ B_2$, $ C_2$ are midpoints of $ BC$, $ AC$, $ AB$, $ AD$, $ BD$, $ CD$ respectively. Two lines parallel to $ A_1A_2$ and $ C_1C_2$ and passes through point $ B_0$ intersects $ B_1B_2$ in points $ A_3$ and $ C_3$respectively. Prove that $ \frac{A_3B_1}{A_3B_2}=\frac{C_3B_1}{C_3B_2}$.
