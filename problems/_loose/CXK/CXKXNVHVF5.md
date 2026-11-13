---
tag: CXKXNVHVF5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a central train station in point $O$, which is connected to other train stations $A_1, A_2, \ldots, A_8$ with tracks. There is also a track between stations $A_i$ and $A_{i+1}$ for each $i$ from $1$ to $8$ (here $A_9 = A_1$). The length of each track $A_iA_{i+1}$ is equal to $1$, and the length of each track $OA_i$ is equal to $2$, for each $i$ from $1$ to $8$.

There are also $8$ trains $B_1, B_2, \ldots, B_8$, with speeds $1, 2, \ldots, 8$ correspondently. Trains can move only by the tracks above, in both directions. No time is wasted on changing directions. If two or more trains meet at some point, they will move together from now on, with the speed equal to that of the fastest of them.

Is it possible to arrange trains into stations $A_1, A_2, \ldots, A_8$ (each station has to contain one train initially), and to organize their movement in such a way, that all trains arrive at $O$ in time $t < \frac{1}{2}$?

*(Proposed by Bogdan Rublov)*
