---
tag: X867M3DHXR
kind: problem
type: answer
answer: "1.8958"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be the number of sequences of words (not necessarily grammatically correct) that have the property that the first word has one letter, each word can be obtained by inserting a letter somewhere in the previous word, and the final word is CCAMATHBONANZA. Here is an example of a possible sequence:

N, NA, NZA, BNZA, BNAZA, BONAZA, BONANZA, CBONANZA, CABONANZA, CAMBONANZA, CAMABONANZA, CAMAHBONANZA, CCAMAHBONANZA, CCAMATHBONANZA.

Estimate $\frac{N}{12!}$. An estimate of $E>0$ earns $\max(0,4-2\max(A/E,E/A))$ points, where $A$ is the actual answer. An estimate of $E=0$ earns $0$ points.

*2021 CCA Math Bonanza Lightning Round #5.3*
