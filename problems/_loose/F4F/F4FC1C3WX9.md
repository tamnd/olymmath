---
tag: F4FC1C3WX9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h527806
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9972
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
There exist primes $p$ and $q$ such that
$$ pq = 1208925819614629174706176 \times 2^{4404} - 4503599560261633
\times 134217730 \times 2^{2202} + 1. $$
Find the remainder when $p+q$ is divided by $1000$ .

*Proposed by Evan Chen*
