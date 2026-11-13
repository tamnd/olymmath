---
tag: 7NYDXJ7VHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734490
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16850
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218489
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
Ann and Drew have purchased a mysterious slot machine; each time it is spun, it chooses a random positive integer such that $k$ is chosen with probability $2^{-k}$ for every positive integer $k$ , and then it outputs $k$ tokens. Let $N$ be a fixed integer. Ann and Drew alternate turns spinning the machine, with Ann going first. Ann wins if she receives at least $N$ total tokens from the slot machine before Drew receives at least $M=2^{2018}$ total tokens, and Drew wins if he receives $M$ tokens before Ann receives $N$ tokens. If each person has the same probability of winning, compute the remainder when $N$ is divided by $2018$ .

*Proposed by Brandon Wang*
