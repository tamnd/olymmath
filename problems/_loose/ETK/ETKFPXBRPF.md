---
tag: ETKFPXBRPF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3275709
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49570
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2023
    source: hf-ai-mo-aops
    label: 2023 Abelkonkurransen Finale
---
Find all non-negative integers $n$ , $a$ , and $b$ satisfying
$$2^a + 5^b + 1 = n!.$$
