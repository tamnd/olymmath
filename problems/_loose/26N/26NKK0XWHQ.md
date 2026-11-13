---
tag: 26NKK0XWHQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620745
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16821
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Define $f(x) = |x-1|$ . Determine the number of real numbers $x$ such that $f(f(\cdots f(f(x))\cdots )) = 0$ , where there are $2018$ $f$ 's in the equation.

*Proposed by Yannick Yao
