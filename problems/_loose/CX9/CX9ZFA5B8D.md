---
tag: CX9ZFA5B8D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h518185
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10022
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212018
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2013
    source: hf-ai-mo-aops
    label: 2013 Olympic Revenge
---
Find all triples $(p,n,k)$ of positive integers, where $p$ is a Fermat's Prime, satisfying $$p^n + n = (n+1)^k$$.

*Observation: a Fermat's Prime is a prime number of the form $2^{\alpha} + 1$ , for $\alpha$ positive integer.*
