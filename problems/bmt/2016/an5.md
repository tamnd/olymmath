---
tag: 2VHFRACGWK
kind: problem
appearances:
  - at: bmt/2016/an5
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2016 official paper
    url: https://berkeley.mt/archives/bmt-2016/AnaS2016.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260928
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find
$$\frac{\tan 1^\circ}{1 + \tan 1^\circ} + \frac{\tan 2^\circ}{1 + \tan 2^\circ} + \ldots + \frac{\tan 89^\circ}{1 + \tan 89^\circ}$$
