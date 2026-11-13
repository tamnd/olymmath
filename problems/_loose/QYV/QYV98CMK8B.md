---
tag: QYV98CMK8B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a platoon of a military camp, there are 3 sergeants and several soldiers. The 3 sergeants take turns on duty every day in a certain order. The officer has issued the following orders:
(1) Each duty sergeant must punish at least 1 soldier every day;
(2) No soldier can be punished more than twice, and no soldier can be punished twice on the same day;
(3) The set of soldiers punished on any two days cannot be identical;
(4) If any sergeant violates any of the first 3 rules, they will be put in solitary confinement.

Is it true that at least one of the sergeants, knowing the punishment situation before their duty, will not be the first among the 3 to be put in solitary confinement? Prove your conclusion.
