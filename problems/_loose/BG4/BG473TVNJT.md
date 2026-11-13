---
tag: BG473TVNJT
kind: problem
type: answer
answer: All integers from 1 to 2013
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $I_{\sigma} = \{ |\sigma_i - i| : i \in I \}$ be sets formed by every permutation $\sigma = (\sigma_1, \sigma_2, \dots, \sigma_{2014})$ of the set $I = \{1, 2, \dots, 2014\}$. Find all possible values of $|I_{\sigma}|$.
