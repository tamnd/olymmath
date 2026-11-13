---
tag: 3RQE44YD1D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Frieren and a mimic use $113$ treasure chests to play a game. At the beginning, all chests are empty and unlocked. In each year, Frieren adds a gem in an unlocked chest, then the mimic acts according to the following rules:
- If there is only one unlocked chest, unlock all chests;
- If there are more than one unlocked chests, the mimic chooses to lock one of the unlocked chests.
Prove that there exists a constant $C > 0$ such that, no matter how the mimic acts, Frieren can always guarantee that, at the end of any year, the difference between the number of gems in any two chests never exceeds $C$. (Remark. The mimics are not allowed to eat Frieren.)
