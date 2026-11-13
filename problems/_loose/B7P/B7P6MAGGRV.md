---
tag: B7P6MAGGRV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611780
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11692
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213649
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Let $p = 2^{16}+1$ be an odd prime. Define $H_n = 1+ \frac{1}{2} + \frac{1}{3} + ... + \frac{1}{n}$ . Compute the remainder when $$ (p-1)! \sum_{n = 1}^{p-1} H_n \cdot 4^n \cdot \binom{2p-2n}{p-n} $$ is divided by $p$ .

*Proposed by Yang Liu*
