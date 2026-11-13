---
tag: RRE3PY27JX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500643
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8483
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Find the remainder when
$$\sum_{k=1}^{2^{16}}\binom{2k}{k}(3\cdot 2^{14}+1)^k (k-1)^{2^{16}-1}$$is divided by $2^{16}+1$ . (*Note:* It is well-known that $2^{16}+1=65537$ is prime.)

*Victor Wang.*
