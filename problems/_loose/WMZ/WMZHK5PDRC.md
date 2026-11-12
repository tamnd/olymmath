---
tag: WMZHK5PDRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1955 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1898320
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56786
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26426
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1955
    source: hf-ai-mo-aops
    label: 1955 Moscow Mathematical Olympiad
---
Suppose that primes $a_1, a_2, . . . , a_p$ form an increasing arithmetic progression and $a_1 > p$ . Prove that if $p$ is a prime, then the difference of the progression is divisible by $p$ .
