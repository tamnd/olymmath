---
tag: F0EH1RX0NN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h2936467
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2021
    source: hf-ai-mo-aops
    label: 2021 BMT
---
Alireza is currently standing at the point $(0, 0)$ in the $x-y$ plane. At any given time, Alireza can move from the point $(x, y)$ to the point $(x + 1, y)$ or the point $(x, y + 1)$ . However, he cannot move to any point of the form $(x, y)$ where $y \equiv 2x\, (\mod \, 5)$ . Let $p_k$ be the number of paths Alireza can take starting from the point $(0, 0)$ to the point $(k + 1, 2k + 1)$ . Evaluate the sum $$ \sum^{\infty}_{k=1} \frac{p_k}{5^k}. $$ .
