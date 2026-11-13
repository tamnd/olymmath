---
tag: NKDWFT0M6M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h486704
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73977
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2007
    source: hf-ai-mo-aops
    label: 2007 Stanford Mathematics Tournament
---
The polynomial $R(x)$ is the remainder upon dividing $x^{2007}$ by $x^2-5x+6$ . $R(0)$ can be expressed as $ab(a^c-b^c)$ . Find $a+c-b$ .
