---
tag: E05VN4XASR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1968 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368359
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25158
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1968
    source: hf-ai-mo-aops
    label: 1968 IMO Shortlist
---
If $a$ and $b$ are arbitrary positive real numbers and $m$ an integer, prove that
$$\Bigr( 1+\frac ab \Bigl)^m +\Bigr( 1+\frac ba \Bigl)^m \geq 2^{m+1}.$$
