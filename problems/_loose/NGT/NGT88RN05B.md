---
tag: NGT88RN05B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h5567
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23566
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
Let $p$ be a prime number. Prove that there is no number divisible by $p$ in the $n-th$ row of Pascal's triangle if and only if $n$ can be represented in the form $n = p^sq - 1$ , where $s$ and $q$ are integers with $s \geq 0, 0 < q < p$ .
