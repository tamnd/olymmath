---
tag: CX01SQ0YHZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218694
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a group of $25$ students is a *team* if any two students in this group are friends. It is known that in the school any student belongs to at least one team but if any two students end their friendships at least one student does not belong to any team. We say that a team is *special* if at least one student of the team has no friend outside of this team. Show that any two friends belong to some special team.
