---
tag: F2FG4RNT45
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3272833
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1374
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205008
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2024
    source: hf-ai-mo-aops
    label: 2024 Abelkonkurransen Finale
---
The pentagons $P_1P_2P_3P_4P_5$ and $I_1I_2I_3I_4I_5$ are cyclic, where $I_i$ is the incentre of the triangle $P_{i-1}P_iP_{i+1}$ (reckoned cyclically, that is $P_0=P_5$ and $P_6=P_1$ ).
Show that the lines $P_1I_1, P_2I_2, P_3I_3, P_4I_4$ and $P_5I_5$ meet in a single point.
