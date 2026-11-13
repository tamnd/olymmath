---
tag: CKXTHSNWD3
kind: problem
appearances:
  - at: pumac/2015/cb3
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_CombinatoricsB.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214873
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Princeton's Math Club recently bought a stock for \$2 and sold it for \$9 thirteen days later. Given that the stock either increases or decreases by \$1 every day and never reached \$0, in how many possible ways could the stock have changed during those thirteen days?
