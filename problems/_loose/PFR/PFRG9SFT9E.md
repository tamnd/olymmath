---
tag: PFRG9SFT9E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h98980
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35866
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234337
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2005
    source: hf-ai-mo-aops
    label: 2005 China Team Selection Test
---
$n$ is a positive integer, $F_n=2^{2^{n}}+1$ . Prove that for $n \geq 3$ , there exists a prime factor of $F_n$ which is larger than $2^{n+2}(n+1)$ .
