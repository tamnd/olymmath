---
tag: WGAH5V7VX9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1787
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Zij $n \ge 2$ een geheel getal, en laat $z_1, \dots, z_n$ positieve gehele getallen zijn die voldoen aan:

- $z_j \le j$ voor $j = 1, \dots, n$;

- $z_1 + \dots + z_n$ is even.

Bewijs dat er $s_1, \dots, s_n \in \{-1, 1\}$ bestaan zodat:

$$s_1 z_1 + s_2 z_2 + \dots + s_n z_n = 0.$$
