---
tag: 5V3TRY7SDB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1811
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vind alle functies $f: \mathbb{Z}_{>0} \to \mathbb{Z}_{>0}$ zo dat voor alle positieve gehele getallen $m, n$ geldt dat

$$(f(m))^2 + 2mf(n) + f(n^2)$$

het kwadraat van een geheel getal is.
