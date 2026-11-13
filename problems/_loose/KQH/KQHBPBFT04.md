---
tag: KQHBPBFT04
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3275711
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49571
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2023
    source: hf-ai-mo-aops
    label: 2023 Abelkonkurransen Finale
---
Find all integers $a$ and $b$ satisfying
\begin{align*}
a^6 + 1 & \mid b^{11} - 2023b^3 + 40b, \text{and}
a^4 - 1 & \mid b^{10} - 2023b^2 - 41.
\end{align*}
