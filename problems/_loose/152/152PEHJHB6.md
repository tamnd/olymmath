---
tag: 152PEHJHB6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3379796
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7149
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2011
    source: hf-ai-mo-aops
    label: 2011 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 62nd ROMANIAN MATHEMATICAL OLYMPIAD
---
The numbers $x, y, z, t, a$ and $b$ are positive integers, so that $xt-yz = 1$ and $$ \frac{x}{y} \ge \frac{a}{b} \ge \frac{z}{t} . $$ Prove that $$ ab \le (x + z) (y +t) $$
