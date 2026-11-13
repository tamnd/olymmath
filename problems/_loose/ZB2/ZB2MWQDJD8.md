---
tag: ZB2MWQDJD8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h426108
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73921
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
Let $S$ be the set of all 3-tuples $(a,b,c)$ that satisfy $a+b+c=3000$ and $a,b,c>0$ . If one of these 3-tuples is chosen at random, what's the probability that $a,b$ or $c$ is greater than or equal to 2,500?
