---
tag: GBQTT8K0AK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378302
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19287
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
For any positive integer $x$ , let $f(x)=x^x$ . Suppose that $n$ is a positive integer such that there exists a positive integer $m$ with $m \neq 1$ such that $f(f(f(m)))=m^{m^{n+2020}}$ . Compute the smallest possible value of $n$ .

*Proposed by Luke Robitaille*
