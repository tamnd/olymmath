---
tag: 1AWYCRNFWT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3130999
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74174
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2023
    source: hf-ai-mo-aops
    label: 2023 Stanford Mathematics Tournament
---
Triangle $\vartriangle ABC$ has side lengths $AB = 3$ , $AC = 2$ and angle $\angle CBA = 30^o$ . Let the possible lengths of $BC$ be $\ell_1$ and $\ell_2$ , where $\ell_2 > \ell_1$ . Compute $\frac{\ell_2}{\ell_1}$ .
