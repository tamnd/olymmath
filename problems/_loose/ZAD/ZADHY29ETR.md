---
tag: ZADHY29ETR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1646
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vind alle functies $f: \mathbb{Z} \rightarrow \mathbb{Z}$ die voldoen aan

- $f(p)>0$ voor alle priemgetallen $p$,
- $p \mid(f(x)+f(p))^{f(p)}-x$ voor alle $x \in \mathbb{Z}$ en alle priemgetallen $p$.
