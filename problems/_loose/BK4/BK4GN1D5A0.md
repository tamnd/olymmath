---
tag: BK4GN1D5A0
kind: problem
type: answer
answer: (X_1, X_2), (X_2, X_3), (X_3, X_4), (X_4, X_5)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237454
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a village $X_0$ there are $80$ tourists who are about to visit $5$ nearby villages $X_1,X_2,X_3,X_4,X_5$.Each of them has chosen to visit only one of them.However,there are cases when the visit in a village forces the visitor to visit other villages among $X_1,X_2,X_3,X_4,X_5$.Each tourist visits only the village he has chosen and the villages he is forced to.If $X_1,X_2,X_3,X_4,X_5$ are totally visited by $40,60,65,70,75$ tourists respectively,then find how many tourists had chosen each one of them and determine all the ordered pairs $(X_i,X_j):i,j\in \{1,2,3,4,5\}$ which are such that,the visit in $X_i$ forces the visitor to visit $X_j$ as well.
