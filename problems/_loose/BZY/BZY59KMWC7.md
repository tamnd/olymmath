---
tag: BZY59KMWC7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984785
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60487
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252565
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2004
    source: hf-ai-mo-aops
    label: 2004 Switzerland - Final Round
---
A list of natural numbers is written on a blackboard. The following operation is performed and repeated: choose any two numbers $a, b$ , wipe them out and instead write gcd $(a, b)$ and lcm $(a, b)$ . Show that the content of the list no longer changed after a certain point in time.
