---
tag: 68J8WN87B4
kind: problem
appearances:
  - at: pumac/2010/cb5
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_CombinatoricsB.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$3n$ people take part in a chess tournament: $n$ girls and $2n$ boys. Each participant plays with each of the others exactly once. There were no ties and the number of games won by the girls is $\frac{7}{5}$ the number of games won by the boys. How many people took part in the tournament?
